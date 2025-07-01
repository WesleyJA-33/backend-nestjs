import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { Observable } from 'rxjs'; // Para trabalhar com programação reativa

@Controller('users') // Define o prefixo da rota para este controlador
export class UsersController {
  constructor(private readonly usersService: UsersService) {} // Injeta UsersService

  @Get() // Define um endpoint GET para /users
  findAll(): Observable<any[]> {
    return this.usersService.findAll(); // Chama o método do serviço
  }
}