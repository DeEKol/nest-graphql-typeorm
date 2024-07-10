import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Color } from './color.entity';
import { ColorService } from './color.service';
import { ColorResolver } from './color.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([Color])],
    providers: [ColorService, ColorResolver],
})
export class ColorModule {}
