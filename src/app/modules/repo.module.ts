import { UserController } from './../controllers/user.controller';
import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import User from '../models/user';
import UserService from '../services/user.service';

@Global()
@Module({ 
  imports: [
    TypeOrmModule.forFeature([
      User,
    ]),
  ],
  providers: [UserService],
  controllers:[UserController],
  exports: [UserService],
})
class RepoModule {

}
export default RepoModule;