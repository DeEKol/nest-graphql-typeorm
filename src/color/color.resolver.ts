import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { ColorService } from './color.service';
import { Color } from './color.entity';

@Resolver(() => Color)
export class ColorResolver {
    constructor(private readonly _colorService: ColorService) {}

    @Query(() => [Color])
    async getColors() {
        return this._colorService.findAll();

        // ! ColorController.php возращал массив c_name (но имеет ли это смысл в graphql?)
        // const colors = await this.colorService.findAll();
        // return colors.map(color => color.c_name);
    }

    @Query(() => [Color])
    getColorsPaginated(
        @Args('page', { type: () => Int }) page: number,
        @Args('limit', { type: () => Int, nullable: true, defaultValue: 5 }) limit: number,
    ) {
        return this._colorService.findAllPaginated(page, limit);
    }

    @Query(() => Color, { nullable: true })
    async getColorByName(@Args('colorName') colorName: string) {
        const color = await this._colorService.findOneByName(colorName);
        if (color) {
            return color;

            // ! ColorController.php возращал название цвета (но имеет ли это смысл в graphql?)
            // return color.c_name;
        } else {
            // ! Ошибка из ColorController.php
            throw new Error('Color not found');
        }
    }
}
