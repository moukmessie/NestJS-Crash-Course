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
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from '../../dtos/CreateUser.dto';
import { UsersService } from '../../services/users/users.service';
import { ValidateCreateUserPipe } from '../../pipes/validate-create-user/validate-create-user.pipe';
import { AuthGuard } from '../../guards/auth/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  @UseGuards(AuthGuard)
  getUsers() {
    return this.userService.fetchUsers();
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUsers(@Body(ValidateCreateUserPipe) userData: CreateUserDto) {
    console.log(userData.age.toPrecision());
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
