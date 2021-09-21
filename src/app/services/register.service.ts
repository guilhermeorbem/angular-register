import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  registers: Register[] = [];

  gerarRegistros() {
    for (let i: number = 0; i < 10; i++) {
      let register: Register = {
        id: i,
        name: "Test" + i,
        email: "test" + i + "@teste.com.ber",
        city: { id: 1200013, nome: "Acrelândia", uf: { id: 12, nome: "Acre", sigla: "AC" } }
      };
      this.registers.push(register);
    }
  }
  //gerarRegistros();
  getRegisters(): Observable<any> {
    if (this.registers.length <= 0)
      this.gerarRegistros();
    return of(this.registers);
  }


  addRegister(register: Register): Observable<any> {
    register.id=this.registers.length;
    this.registers.push(register);
    return of(this.registers);

  }

  updateRegister(register: Register): Observable<boolean> {
    let index = this.registers.findIndex(item => item.id === register.id);
    if (index >= 0) {
      this.registers[index] = register;
      return of(true);
    } else {
      return of(false);
    }
  }

  deleteRegister(register: Register): Observable<any> {
    return of(this.registers.filter(item => {
      return item.id != register.id
    }));

  }

}
