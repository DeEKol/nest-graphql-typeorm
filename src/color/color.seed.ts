import { Color } from './color.entity';

export const colorsSeed: Omit<Color, 'id'>[] = [
    {
        c_name: 'Yellow',
        c_hex: '#FFFF00',
        c_rgb: 'rgb(255, 255, 0)',
    },
    {
        c_name: 'Blue',
        c_hex: '#0000FF',
        c_rgb: 'rgb(0, 0, 255)',
    },
    {
        c_name: 'Red',
        c_hex: '#FF0000',
        c_rgb: 'rgb(255, 0, 0)',
    },
    {
        c_name: 'Green',
        c_hex: '#00FF00',
        c_rgb: 'rgb(0, 255, 0)',
    },
    {
        c_name: 'Purple',
        c_hex: '#800080',
        c_rgb: 'rgb(128, 0, 128)',
    },
    {
        c_name: 'Orange',
        c_hex: '#FFA500',
        c_rgb: 'rgb(255, 165, 0)',
    },
    {
        c_name: 'Pink',
        c_hex: '#FFC0CB',
        c_rgb: 'rgb(255, 192, 203)',
    },
    {
        c_name: 'Brown',
        c_hex: '#A52A2A',
        c_rgb: 'rgb(165, 42, 42)',
    },
    {
        c_name: 'White',
        c_hex: '#FFFFFF',
        c_rgb: 'rgb(255, 255, 255)',
    },
    {
        c_name: 'Black',
        c_hex: '#000000',
        c_rgb: 'rgb(0, 0, 0)',
    },
    {
        c_name: 'Gray',
        c_hex: '#808080',
        c_rgb: 'rgb(128, 128, 128)',
    },
    {
        c_name: 'Cyan',
        c_hex: '#00FFFF',
        c_rgb: 'rgb(0, 255, 255)',
    },
    {
        c_name: 'Magenta',
        c_hex: '#FF00FF',
        c_rgb: 'rgb(255, 0, 255)',
    },
    {
        c_name: 'Lime',
        c_hex: '#00FF00',
        c_rgb: 'rgb(0, 255, 0)',
    },
    {
        c_name: 'Teal',
        c_hex: '#008080',
        c_rgb: 'rgb(0, 128, 128)',
    },
];
