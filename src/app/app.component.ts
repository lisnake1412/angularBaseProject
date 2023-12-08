import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular16-base-project';
  routes: any = [
    {path:'home', name:'homepage'},
    {path:'ngIf-ngFor', name:'ngIf and ngFor'},
    {path:'ngModel', name:'ngModel'},
    {path:'input-output', name:'inOutPut'},
    {path:'rxjs', name:'Rxjs'}
  ];
}
