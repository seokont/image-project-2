import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders], // щоб інші модулі могли інжектити
})
export class DatabaseModule {}
