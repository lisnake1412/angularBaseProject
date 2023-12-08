import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.scss'],
})
export class NgModelComponent {
  data_exports: Array<any> = [
    {
      task: 'Mua thực phẩm',
      completed: false,
    },
    {
      task: 'Học lập trình',
      completed: true,
    },
    {
      task: 'Tập thể dục',
      completed: false,
    },
  ];
  newData: string = '';
  handleDone(id: number) {
    this.data_exports[id].completed = true;
  }
  handleDelete(id: number) {
    this.data_exports = this.data_exports.filter((data, index) => {
      return index !== id;
    });
  }
  handleAddNewList() {
    this.data_exports.push({
      task: this.newData,
      completed: false
    });
  }
}
