import { Component, OnInit,} from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { StateService } from '../../services/state.service';
import { State } from '../../models/state';
import { CityService } from '../../services/city.service';
import { City } from '../../models/city';
import { Register } from '../../models/register';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})
export class RegisterComponent implements OnInit {
  title = "Register";
  register!: Register
  registers!: Register[];
  states!: State[];
  citys: City[] = [];

  selected(register: Register) {
    let state = { target: { value: register.city.uf.id } }
    this.getCity(state);
    this.register = register;
  }
  newRegister(): void {
    this.register = new Register();
  }
  getUfs() {
    this.ufService.getStates().subscribe(retorno => {
      this.states = retorno;
    });
  }
  getCity(state: any) {
    this.cityService.getCity(state.target.value).subscribe(retorno => {
      this.citys = retorno;
    });
  }

  cityTrackBy(index:number, city:any):number{
    let teste =index;
    return city.id;
  }
  getRegisters(): void {
    this.regiterService.getRegisters().subscribe(retorno => { this.registers = retorno });
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
    this.regiterService.deleteRegister(register).subscribe(retorno => {
      this.registers = retorno;
      this.newRegister();
    });
  }
  constructor(
    private regiterService: RegisterService,
    private ufService: StateService,
    private cityService: CityService
  ) { }

  ngOnInit(): void {
    this.getRegisters();
    this.newRegister();
    this.getUfs();
  }

}
