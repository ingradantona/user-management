import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerService } from './config/swagger/swagger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: process.env.APP_PORT_CLIENT });

  if (process.env.NODE_ENV === 'development') {
    new SwaggerService().init(app);
  }

  await app.listen(process.env.APP_PORT);
}
bootstrap();
