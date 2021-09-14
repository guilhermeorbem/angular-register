import { Component, Input, OnInit, TestabilityRegistry } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Register } from '../../interfaces/register';

import { RegisterService } from 'src/app/services/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})
export class RegisterComponent implements OnInit {
  title = "Register";
  register!: Register
  registers!: Register[];

  selected(register: Register) {
    this.register = register;
  }
  newRegister(): void {
    this.register = {
      id: 0,
      name: '',
      email: ''
    };
  }

  getRegisters(): void {
    this.regiterService.getRegisters().subscribe(retorno => this.registers = retorno);
  }
  save(register: Register): void {
    if (register.id <= 0) {
      this.regiterService.addRegister(register).subscribe(retorno => {
        if (retorno) {
          this.newRegister();
          alert("Save!");
        }
      });

    } else {
      this.regiterService.updateRegister(register).subscribe(retorno => {
        if (retorno) {
          this.newRegister();
          alert("Update");
        }
      });
    }
    this.getRegisters();
  }
  delete(register: Register): void {
    this.regiterService.deleteRegister(register);
  }
  constructor(
    private regiterService: RegisterService
  ) { }

  ngOnInit(): void {
    this.getRegisters();
    this.newRegister();
  }

}
