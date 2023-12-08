import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NgIfNgForComponent } from './pages/ng-if-ng-for/ng-if-ng-for.component';
import { NgModelComponent } from './pages/ng-model/ng-model.component';
import { InputOutputComponent } from './pages/input-output/input-output.component';
import { RxjsComponent } from './pages/rxjs/rxjs.component';
import { ReactFormComponent } from './pages/react-form/react-form.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { HighchartsComponent } from './pages/highcharts/highcharts.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'ngIf-ngFor', component: NgIfNgForComponent},
  {path:'ngModel', component: NgModelComponent},
  {path:'input-output', component: InputOutputComponent},
  {path:'reactForm', component: ReactFormComponent},
  {path:'pipe', component: PipesComponent},
  {path:'rxjs', component:RxjsComponent},
  {path:'highcharts', component:HighchartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
