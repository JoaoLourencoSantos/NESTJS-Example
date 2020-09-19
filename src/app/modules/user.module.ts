import { UserRepository } from '../repositories/user.repository';
import { UserController } from '../controllers/user.controller';
import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserService from '../services/user.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
class UserModule {}
export default UserModule;
