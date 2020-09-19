import { UserDTO } from '../dto/user.dto';
import { ResponseDTO } from '../dto/response.dto';
import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';

import User from '../models/user';
import RepoService from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly repository: RepoService) {}

  @Get('/helf-check')
  async helfCheck(): Promise<string> {
    return 'The api is on';
  }

  @Get()
  async findAll(): Promise<ResponseDTO> {
    return this.repository.findAll();
  }

  @Get('/one/:id')
  async findOne(@Param() params): Promise<ResponseDTO> {
    return this.repository.find(params);
  }

  @Post()
  async create(@Body() user: UserDTO): Promise<ResponseDTO> {
    return this.repository.create(user);
  }
}
