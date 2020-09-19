import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import RepoModule from './app/modules/repo.module';
import * as ormOptions from './config/orm';

@Module({
  imports: [TypeOrmModule.forRoot(ormOptions), RepoModule],
})
export class AppModule {}
