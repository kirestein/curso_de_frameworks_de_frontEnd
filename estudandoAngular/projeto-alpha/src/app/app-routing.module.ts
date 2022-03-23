import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importando os nossos componentes
import { HomeComponent } from './home/home.component';
import { InterpolationComponent } from './interpolation/interpolation.component'

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'interpolation', component:InterpolationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
