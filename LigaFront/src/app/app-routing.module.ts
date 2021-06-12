import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarPartidoComponent } from './COMPONENTES/agregar-partido/agregar-partido.component';
import { AgregarComponent } from './COMPONENTES/agregar/agregar.component';
import { InicioComponent } from './COMPONENTES/inicio/inicio.component';


const routes: Routes = [
  { path: '', redirectTo:'/inicio', pathMatch: 'full'},
  { path: 'inicio', component: InicioComponent},
  { path: 'add', component: AgregarComponent},
  { path: 'addPartido', component: AgregarPartidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
