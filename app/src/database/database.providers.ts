import { Sequelize } from 'sequelize-typescript';
import { Element } from '../modules/elements/entities/element.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'mysql',
        port: 3306,
        username: 'root',
        password: 'rootpassword',
        database: 'nestdb',
      });
      sequelize.addModels([Element]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
