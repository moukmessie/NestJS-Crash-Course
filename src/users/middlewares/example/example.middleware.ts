import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('example middleware');

    console.log(req.headers.authorization);
    const { authorization } = req.headers;
    /* Checking if the authorization header is present and if it is equal to ddosCalkuper. If it is not
    present or not equal to ddosCalkuper, it throws an error. */
    if (!authorization)
      throw new HttpException('No  AUthorization token', HttpStatus.FORBIDDEN);

    if (authorization === 'ddosCalkuper') next();
    else {
      throw new HttpException(
        'Invalid  AUthorization token',
        HttpStatus.FORBIDDEN,
      );
    }
  }
}
