import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CityCreateComponent} from './cities/city-create/city-create.component';

const routes: Routes = [
  {path: 'city-create', component: CityCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
