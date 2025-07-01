import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:4200', // <--- Essa linha permite permite requisições HTTP vindas especificamente da porta 4200
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos HTTP permitidos
    credentials: true, // Se estiver usando cookies ou autenticação baseada em sessão
  });

  await app.listen(3000); // A porta onde o NestJS está rodando
  console.log(`NestJS Application is running on: ${await app.getUrl()}`);
}
bootstrap();