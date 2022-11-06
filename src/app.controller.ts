import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // invoke at 'localhost:3000' without any endpoint route..
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
