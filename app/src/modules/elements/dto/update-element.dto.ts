import { PartialType } from '@nestjs/mapped-types';
import { CreateElementDto } from './create-element.dto';

export class UpdateElementDto extends PartialType(CreateElementDto) {
  type: string;
  x: number;
  y: number;
  width: number;
  height: number;
  opacity: number;
  scale: number;
  props: object;
  meta: object;
  userId: string;
}
