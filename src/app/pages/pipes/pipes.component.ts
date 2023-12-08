import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  currentDate:any = new Date()
  upperText:string = 'UPPERTEXT'
  lowerText:string = 'lowertext'
  currency:number = 12345678
  decimal:number = 1/3
  jsondemo = {name:'Linh'}
  count:number = 0;
  phoneNumber:string = ''
  ngOnInit(): void {
    setInterval(() => {
      this.count++
    },1000) 
  }
  
}
