import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterDatailComponent } from './regitration/register-datail/register-datail.component';
import { RegisterComponent } from './regitration/register/register.component';

const routes: Routes = [
  {path:'register', component: RegisterComponent},
  {path:'register-datail',component:RegisterDatailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
