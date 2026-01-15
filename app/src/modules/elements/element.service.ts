import { Injectable, Inject } from '@nestjs/common';
import { CreateElementDto } from './dto/create-element.dto';
import { UpdateElementDto } from './dto/update-element.dto';
import { Element } from './entities/element.entity';

@Injectable()
export class ElementService {
  constructor(
    @Inject('ELEMENTS_REPOSITORY')
    private readonly elementRepository: typeof Element,
  ) {}

  create(createElementDto: CreateElementDto) {
    try {
      const element = this.elementRepository.create(createElementDto);

      if (!element) {
        throw new Error('Failed to create element');
      }
      return element;
    } catch (error) {
      throw new Error(`Error creating element: ${error.message}`);
    }
  }

  async findAll(
    page: number = 1,
    limit: number = 10,
  ): Promise<{ element: Element[]; total: number; pages: number }> {
    try {
      const offset = (page - 1) * limit;

      const { rows: elements, count: total } =
        await this.elementRepository.findAndCountAll({
          limit: Number(limit),
          offset: Number(offset),
          order: [['createdAt', 'DESC']],
        });

      const pages = Math.ceil(total / limit);
      return {
        element: elements.map(
          (element) => element.toJSON() as unknown as Element,
        ),
        total,
        pages,
      };
    } catch (error) {
      throw new Error(`Error retrieving elements: ${error.message}`);
    }
  }

  findOne(id: string) {
    try {
      const element = this.elementRepository.findByPk(id);
      return element ? element : null;
    } catch (error) {
      throw new Error(`Error retrieving element: ${error.message}`);
    }
  }

  update(id: string, updateElementDto: UpdateElementDto) {
    try {
      const element = this.elementRepository.findByPk(id);
      if (!element) {
        return null;
      }
      this.elementRepository.update(updateElementDto, { where: { id } });

      const result = this.elementRepository.findByPk(id);
      return result;
    } catch (error) {
      throw new Error(`Error updating element: ${error.message}`);
    }
  }

  remove(id: string) {
    try {
      const element = this.elementRepository.findByPk(id);

      if (!element) {
        return false;
      }

      this.elementRepository.destroy({ where: { id } });
      return true;
    } catch (error) {
      throw new Error(`Error deleting element: ${error.message}`);
    }
  }
}
