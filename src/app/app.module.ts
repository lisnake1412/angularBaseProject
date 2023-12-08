//libraries
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HighchartsChartModule } from 'highcharts-angular';
//custom pipe
import {FormatPhoneNumber} from './pages/pipes/custom-pipe';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NgIfNgForComponent } from './pages/ng-if-ng-for/ng-if-ng-for.component';
import { NgModelComponent } from './pages/ng-model/ng-model.component';
import { InputOutputComponent } from './pages/input-output/input-output.component';
import { HeaderComponent } from './layout/header/header.component';
import { RxjsComponent } from './pages/rxjs/rxjs.component';
import { ChildrenComponent } from './pages/input-output/children/children.component';
import { ReactFormComponent } from './pages/react-form/react-form.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { HighchartsComponent } from './pages/highcharts/highcharts.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NgIfNgForComponent,
    NgModelComponent,
    InputOutputComponent,
    HeaderComponent,
    RxjsComponent,
    ChildrenComponent,
    ReactFormComponent,
    PipesComponent,
    FormatPhoneNumber,
    HighchartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
