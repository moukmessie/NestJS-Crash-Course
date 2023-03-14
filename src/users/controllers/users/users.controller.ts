import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from '../../dtos/CreateUser.dto';
import { UsersService } from '../../services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  getUsers() {
    return this.userService.fetchUsers();
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUsers(@Body() userData: CreateUserDto) {
    return this.userService.createUser(userData);
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    const user = this.userService.fetchUserById(id);

    if (!user)
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    return user;
  }

  //   @Post('create')
  //   createUsers(@Req() request: Request, @Res() response: Response) {
  //     console.log(request.body);
  //     response.send('Created !');
  //   }

  //   @Get('posts')
  //   getUsersPosts() {
  //     return [
  //       {
  //         username: 'Messie',
  //         email: 'mouk@gmail.com',
  //         posts: [
  //           {
  //             id: 1,
  //             title: 'Post 1',
  //           },
  //           {
  //             id: 2,
  //             title: 'Post 2',
  //           },
  //         ],
  //       },
  //     ];
  //   }

  //   @Get('posts/comments')
  //   getUsersPostsComments() {
  //     return [
  //       {
  //         id: 1,
  //         title: 'Post 1',
  //         comments: [],
  //       },
  //     ];
  //   }
}
