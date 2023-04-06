import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

const PORT = process.env.PORT || 4444;

async function bootstrap() {
  const app: NestExpressApplication =
    await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors();

  await app.listen(PORT, () => {
    console.log(`Start server on the ${PORT} port!`);
  });
}

bootstrap();
