import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log(`Request received at localhost:3000`);
    return 'Hello World!';
  }
}
