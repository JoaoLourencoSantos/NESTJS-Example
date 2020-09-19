import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';

const options: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'data/poupa_geral.db',
  logging: true,
  entities: [path.resolve(__dirname, '..', 'app', 'models', '*')],
  synchronize: true,
};

module.exports = options;
