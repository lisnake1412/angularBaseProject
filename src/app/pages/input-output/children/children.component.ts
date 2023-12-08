import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent {
  @Input() inputDecoratorData:string = ''
  @Output() outputDecoratorData = new EventEmitter()
  inputData:string = ''
  handleInputData( data:any) {

    this.outputDecoratorData.emit(data)
  }
}
