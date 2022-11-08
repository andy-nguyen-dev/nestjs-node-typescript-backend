import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log(`Request received at localhost:3000`);
    return 'Hello World!';
  }

  // TODO - update this method to accept a physican name as a string
  getPhysicians(): Array<string> {

    // TODO - validate the physician name. return an error if the physician cannot be found

    return [
      'Steve',
      'George',
      'Jake'
    ];
  }
}
