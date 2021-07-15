import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHellonestJs(): string {
    return 'Hello World! Nest Js';
  }
}
