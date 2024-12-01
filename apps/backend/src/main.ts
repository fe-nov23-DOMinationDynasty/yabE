import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(`api/${process.env.API_VERSION}`);

  app.use(cookieParser());


  app.enableCors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    allowedHeaders: 'set-cookie',
  })


  await app.listen(process.env.PORT || 3001);
}
bootstrap();
