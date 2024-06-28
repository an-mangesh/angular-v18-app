import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { FormComponent } from './components/form/form.component';
import { InjectableServiceComponent } from './components/injectable-service/injectable-service.component';
import { ConstrctDependancyInjectionComponent } from './components/constrct-dependancy-injection/constrct-dependancy-injection.component';
import { PipeOperationComponent } from './components/pipe-operation/pipe-operation.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'control-flow', component: ControlFlowComponent },
  { path: 'form', component: FormComponent },
  { path: 'inject-service', component: InjectableServiceComponent },
  {
    path: 'constructor-based-dependency-inject',
    component: ConstrctDependancyInjectionComponent,
  },
  {
    path: 'pipe',
    component: PipeOperationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
