import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DatabaseModule } from './database/database.module';
import { ElementModule } from './modules/elements/element.module';

@Module({
  imports: [DatabaseModule, ElementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
