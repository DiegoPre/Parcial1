import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MascotasComponent } from './Components/mascotas/mascotas.component';
import { PropietarioComponent } from './Components/propietario/propietario.component';
import { ComidaComponent } from './Components/comida/comida.component';

const routes: Routes = [
  {path:"Mascota",component:MascotasComponent},
  {path:"Comida", component:ComidaComponent},
  {path:"Propietario", component:PropietarioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
