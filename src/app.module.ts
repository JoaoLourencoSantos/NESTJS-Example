import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth/auth.module';
import UserModule from './app/modules/user.module';
import * as ormOptions from './config/orm';

@Module({
  imports: [TypeOrmModule.forRoot(ormOptions), AuthModule, UserModule],
})
export class AppModule {}
