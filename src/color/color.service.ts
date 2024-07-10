import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Color } from './color.entity';
import { colorsSeed } from "./color.seed";

@Injectable()
export class ColorService implements OnModuleInit {
    constructor(
        @InjectRepository(Color)
        private readonly _colorRepository: Repository<Color>,
    ) {}

    // ! Добавил цвета в бд для проверки
    async seed(): Promise<void> {
        for (const color of colorsSeed) {
            const existingColor = await this._colorRepository.findOne({
                where: { c_name: color.c_name },
            });
            if (!existingColor) {
                await this._colorRepository.save(color);
            }
        }
    }
    async onModuleInit() {
        await this.seed();
    }

    findAll(): Promise<Color[]> {
        return this._colorRepository.find();
    }

    findAllPaginated(page: number, limit: number): Promise<Color[]> {
        return this._colorRepository.find({
            skip: (page - 1) * limit,
            take: limit,
        });
    }

    findOneByName(name: string): Promise<Color | null> {
        return this._colorRepository.findOneBy({ c_name: name });
    }
}
