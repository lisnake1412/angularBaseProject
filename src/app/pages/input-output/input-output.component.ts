import { Component } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent {
  getInputData:string = ''
  receivedData:string = ''
  getOutputData(data:string) {
    console.log(data)
    this.receivedData = data
  }
}
