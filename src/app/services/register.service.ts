import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Register, } from '../interfaces/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  register: Register[] =
    [{ id: 1, name: "Teste1", email: "teste1@teste.com.br" },
    { id: 2, name: "Teste2", email: "teste2@teste.com.br" },
    { id: 3, name: "Teste3", email: "teste3@teste.com.br" }];

  getRegisters(): Observable<Register[]> {
    const register = of(this.register);
    return register;
  }

  addRegister(register: Register): Observable<Register[]> {
    register.id = this.register.length + 1;
    this.register.push(register);
    return of(this.register);

  }

  updateRegister(register: Register): Observable<boolean> {
    let index = this.register.findIndex(item => item.id === register.id);
    if (index >= 0) {
      this.register[index] = register;
      return of(true);
    } else {
      return of(false);
    }
  }

  deleteRegister(register: Register): Observable<Register[]> {
    return of(this.register.filter(item => {
      return item.id != register.id
    }));

  }

  constructor() { }
}
