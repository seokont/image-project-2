import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ElementService } from './element.service';
import { CreateElementDto } from './dto/create-element.dto';
import { UpdateElementDto } from './dto/update-element.dto';
import { Element } from './entities/element.entity';

@Controller('element')
export class ElementController {
  constructor(private readonly elementService: ElementService) {}

  @Post()
  create(@Body() createElementDto: CreateElementDto) {
    return this.elementService.create(createElementDto);
  }

  @Get()
  findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<{ element: Element[]; total: number; pages: number }> {
    return this.elementService.findAll(page, limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.elementService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateElementDto: UpdateElementDto) {
    return this.elementService.update(id, updateElementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.elementService.remove(id);
  }
}
