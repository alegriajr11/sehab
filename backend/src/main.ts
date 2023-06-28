import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as requestIp from 'request-ip';
import { SERVER_PORT } from './config/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const configService = app.get(ConfigService);

  //Configuración del middleware de request-ip
  app.use(requestIp.mw());

  //Server Port
  const port = +configService.get<number>(SERVER_PORT) || 3000;
  await app.listen(port);
  //console.log(`Listening on port ${await app.getUrl()}`);
}
bootstrap();
