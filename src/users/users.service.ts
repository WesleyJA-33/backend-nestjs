import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs'; // Para trabalhar com programação reativa
import { map } from 'rxjs/operators'; // Operador para transformar o fluxo de dados

@Injectable()
export class UsersService {
  constructor(private readonly httpService: HttpService) {} // Injeta HttpService

  findAll(): Observable<any[]> {
    return this.httpService.get('https://jsonplaceholder.typicode.com/users').pipe(
      map(response => response.data), // O HttpService retorna um objeto de resposta, no caso apenas os dados
    );
  }
}