import { JwtAuthGuard } from './../../auth/guard/jwt.guard';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ValidationPipe,
  UseGuards,
  Request,
} from '@nestjs/common';

import { ResponseDTO } from '../dto/response.dto';
import { UserDTO } from '../dto/user.dto';
import RepoService from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly repository: RepoService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/helf-check')
  async helfCheck(@Request() req): Promise<string> {
    console.log(req.user);

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
  async create(@Body(ValidationPipe) user: UserDTO): Promise<ResponseDTO> {
    return this.repository.create(user);
  }
}
