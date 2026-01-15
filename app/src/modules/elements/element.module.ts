import { Module } from '@nestjs/common';
import { ElementService } from './element.service';
import { ElementController } from './element.controller';
import { elementsProviders } from './element.providers';
import { DatabaseModule } from 'app/src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [...elementsProviders, ElementService],
  controllers: [ElementController],
  exports: [...elementsProviders],
})
export class ElementModule {}
