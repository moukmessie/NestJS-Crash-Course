import {
  Body,
  Controller,
  Get,
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

@Controller('users')
export class UsersController {
  @Get()
  getUsers(@Query('sortBy') sortBy: string) {
    console.log(sortBy);
    return { username: 'Messie', email: 'mouk@gmail.com' };
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUsers(@Body() userData: CreateUserDto) {
    console.log(userData);
    return {};
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return {
      id,
    };
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
