import { Injectable } from '@nestjs/common';
import { CreateUserType } from '../../../../dist/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'Messiemg', email: 'mouk@gmail.com' },
    { username: 'Mouk', email: 'mouk@gmail.com' },
    { username: 'mg', email: 'mg@gmail.com' },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userData: CreateUserType) {
    console.log(userData);
    this.fakeUsers.push(userData);
    return;
  }

  fetchUserById(id: number) {
    return null;
  }
}
