import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'; // Importando função para fazer requisições HTTP externas
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [HttpModule], // Permite fazer requisições HTTP externas
  providers: [UsersService], // Serviço que contém a lógica de negócio
  controllers: [UsersController], // Controlador que define as rotas
  exports: [UsersService], // Exporta o serviço se outros módulos forem usá-lo
})
export class UsersModule {}