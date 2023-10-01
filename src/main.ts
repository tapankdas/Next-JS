import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    credentials:true,    
    origin:["http://localhost:3000","https://main.d2ikncomdr6rnr.amplifyapp.com"],
  });
  
  

  app.use(cookieParser())
  await app.listen(4000);
}
bootstrap();
