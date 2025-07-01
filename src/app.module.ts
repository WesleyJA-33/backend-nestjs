
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module'; // Importando o UsersModule

@Module({
  imports: [UsersModule], // Adiciona o UsersModule aqui
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}