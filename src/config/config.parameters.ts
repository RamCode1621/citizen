import { IDatabaseCredentials } from './interfaces';
import { ValidationPipe } from '@nestjs/common';

export default () => ({
  serverPort: parseInt(process.env.PORT, 10),
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    type: process.env.DATABASE_TYPE,
  } as IDatabaseCredentials,
  corsOptions: {
    origin: process.env.CORS_ORIGIN,
  },
  globalPipes: {
    validation: new ValidationPipe({
      whitelist: true,
    }),
  },
});
