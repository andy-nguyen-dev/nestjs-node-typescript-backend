import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // TODO: should accept a physician name as a string query param
  @Get('/physicians')
  getPhysicians(): Array<string> {

    // should call AppService, where the physician name will be validated
    return this.appService.getPhysicians();
  }
}
