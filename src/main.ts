import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.enableCors();
  const PORT = process.env.PORT ?? 1234
  await app.listen(PORT);
  console.log('Server on port', PORT)
}
bootstrap();
