import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import configuration from './config/config.parameters';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const defaultPort = configuration().serverPort;

  app.enableCors(configuration().corsOptions);
  app.useGlobalPipes(configuration().globalPipes.validation);

  await app.listen(defaultPort);
}
bootstrap();
