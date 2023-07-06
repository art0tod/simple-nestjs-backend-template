import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `<body style="margin: 0;padding: 0;"><div style="height: 100%;font-family: monospase, sans-serif;background: black;margin: 0;"><div style="display: table;width: 100%;height: 100vh;text-align: center;"><div style="display: table-cell;vertical-align: middle;"><h1 style="font-size: 50px;display: inline-block;padding-right: 12px;background: -webkit-linear-gradient(45deg, #fc0356, #2902c4);-webkit-background-clip: text;-webkit-text-fill-color: transparent;">Welcome to the internet</h1></div></div></div></body>`;
  }
}
