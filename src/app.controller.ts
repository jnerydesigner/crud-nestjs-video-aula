import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    console.log('hello');
  }

  @Get()
  getHellonestJs(): string {
    return this.appService.getHellonestJs();
  }
}
