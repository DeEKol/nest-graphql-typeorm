import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';

// ! Название таблицы из Color.php
@ObjectType()
@Entity('v_color')
@Unique(['c_name'])
export class Color {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    c_name: string;

    @Field()
    @Column()
    c_hex: string;

    @Field()
    @Column()
    c_rgb: string;
}
