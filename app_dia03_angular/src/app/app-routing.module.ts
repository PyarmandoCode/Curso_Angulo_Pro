import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProgramacionComponent } from './components/programacion/programacion.component';
import { RedesComponent } from './components/redes/redes.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { BasededatosComponent } from './components/basededatos/basededatos.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'inicio',component:HomeComponent},
  {path:'programacion',component:ProgramacionComponent},
  {path:'redes/:id',component:RedesComponent},
  {path:'basededatos',component:BasededatosComponent},
  {path:'detailcurso/:id',component:DetailComponent},
  {path:'**',component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
