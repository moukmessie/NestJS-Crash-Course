import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    console.log('Inside ValidateCreateUserPipe!');
    console.log(value);
    console.log(metadata);

    const parseAgetoInt = parseInt(value.age.toString());
    if (isNaN(parseAgetoInt)) {
      console.log(`${value.age} is not a number`);
      throw new HttpException(
        'Invalid Data Type for property age. Expected Number!',
        HttpStatus.BAD_REQUEST,
      );
    }
    console.log(`${parseAgetoInt} is  a number`);
    return { ...value, age: parseAgetoInt };
  }
}
