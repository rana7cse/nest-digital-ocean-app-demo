import { Injectable } from '@nestjs/common';
import * as process from "process";

@Injectable()
export class AppService {
  getHello(): string {
    const appName = process.env.APP_NAME || 'Demo APP';
    return `${appName} is Running`;
  }
}
