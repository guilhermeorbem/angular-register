import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Register } from 'src/app/interfaces/register';
import { RegisterService } from 'src/app/services/register.service';


@Component({
  selector: 'app-register-datail',
  templateUrl: './register-datail.component.html',
  styleUrls: ['./register-datail.component.css']
})
export class RegisterDatailComponent {

  @Input() registers!: Register[];
  @Output() selected = new EventEmitter<Register>();

  onSelected(register: Register) {
    this.selected.emit(register);
  }
}
