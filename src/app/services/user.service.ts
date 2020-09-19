import { UserDTO } from './../dto/user.dto';
import {
  Injectable,
  BadRequestException,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import User from '../models/user';
import { ResponseDTO } from './../dto/response.dto';

@Injectable()
class UserService {
  public constructor(
    @InjectRepository(User) public readonly userReporitory: Repository<User>,
  ) {}

  async findAll(): Promise<ResponseDTO> {
    try {
      return new ResponseDTO(
        'Found users',
        await this.userReporitory.find(),
        200,
        true,
      );
    } catch (exception) {
      throw new InternalServerErrorException(
        'Erro in find users: ' + exception.message,
      );
    }
  }

  async find({ id }): Promise<ResponseDTO> {
    try {
      if (!id) {
        throw new BadRequestException("Parameter 'id' is necessary!");
      }

      const result: User = await this.userReporitory.findOne(id);

      if (!result) {
        throw new NotFoundException('user not found');
      }

      return new ResponseDTO('Found users', result, 200, true);
    } catch (exception) {
      throw new InternalServerErrorException(
        'Erro in find users: ' + exception.message,
      );
    }
  }

  async create(userDTO: UserDTO): Promise<ResponseDTO> {
    try {
      const user: User = await this.userReporitory.save(userDTO);

      if (!user) {
        throw new BadRequestException('user not can saved');
      }

      return new ResponseDTO('Created', user, 201, true);
    } catch (exception) {
      throw new InternalServerErrorException(
        'Erro in create user: ' + exception.message,
      );
    }
  }
}

export default UserService;
