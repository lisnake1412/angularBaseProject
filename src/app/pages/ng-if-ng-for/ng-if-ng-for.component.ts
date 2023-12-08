import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-ng-for',
  templateUrl: './ng-if-ng-for.component.html',
  styleUrls: ['./ng-if-ng-for.component.scss'],
})
export class NgIfNgForComponent {
  data_exports: Array<any> = [
    {
      id: 1,
      task: 'Mua thực phẩm',
      completed: false,
    },
    {
      id: 2,
      task: 'Học lập trình',
      completed: true,
    },
    {
      id: 3,
      task: 'Tập thể dục',
      completed: false,
    },
  ];
  newData:string = ''
  handleDone(id: number) {
    this.data_exports[id].completed = true;
  }
  handleDelete(id: number) {
    this.data_exports = this.data_exports.filter((data, index) => {
      return index !== id;
    });
  }
}
