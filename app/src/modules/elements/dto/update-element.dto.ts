import { PartialType } from '@nestjs/mapped-types';
import { CreateElementDto } from './create-element.dto';

import {
  IsString,
  IsInt,
  MinLength,
  Max,
  Min,
  IsEmail,
  IsNotEmpty,
  IsObject,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class UpdateElementDto extends PartialType(CreateElementDto) {
  @ApiProperty({ example: 'Описание', description: 'Тип элемента' })
  @IsNotEmpty()
  type: string;

  @ApiProperty({ example: 100, description: 'Позиция X элемента' })
  @IsInt()
  @Min(0)
  x: number;

  @ApiProperty({ example: 150, description: 'Позиция Y элемента' })
  @IsInt()
  @Min(0)
  y: number;

  @ApiProperty({ example: 200, description: 'Ширина элемента' })
  @IsInt()
  @Min(0)
  width: number;

  @ApiProperty({ example: 100, description: 'Высота элемента' })
  @IsInt()
  @Min(0)
  height: number;

  @ApiProperty({ example: 1, description: 'Прозрачность элемента' })
  @IsInt()
  @Min(0)
  opacity: number;

  @ApiProperty({ example: 0, description: 'Масштаб элемента' })
  @IsInt()
  @Min(0)
  scale: number;

  @ApiProperty({ example: {}, description: 'Свойства элемента' })
  @IsObject()
  props: object;

  @ApiProperty({ example: {}, description: 'Метаданные элемента' })
  @IsObject()
  meta: object;

  @ApiProperty({
    example: 'ba5b1cf3-1f4a-41c3-a477-94d238bb72f5',
    description: 'ID пользователя',
  })
  @IsString()
  userId: string;
}
