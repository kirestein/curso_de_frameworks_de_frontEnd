import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//importando os nossos componentes
import { HomeComponent } from './home/home.component';
import { InterpolationComponent } from './interpolation/interpolation.component'
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { CPaiComponent } from './c-pai/c-pai.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { PipeComponent } from './pipe/pipe.component';
import { FormularioComponent } from './formulario/formulario.component';
import { CServiceComponent } from './c-service/c-service.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'interpolation', component:InterpolationComponent},
  {path:'propb', component:PropertyBindingComponent},
  {path:'eventb', component:EventBindingComponent},
  {path:'two-way', component:TwoWayBindingComponent},
  {path:'pai', component:CPaiComponent},
  {path:'if', component:NgIfComponent},
  {path:'for', component:NgForComponent},
  {path:'class', component:NgClassComponent},
  {path:'style', component:NgStyleComponent},
  {path:'pipe', component:PipeComponent},
  {path:'formulario', component:FormularioComponent},
  {path:'service', component:CServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
