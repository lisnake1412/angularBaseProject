import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.scss'],
})
export class ReactFormComponent {
  isBanked:boolean = false
  formData = new FormGroup({
    beneficiaryBank: new FormControl(''),
    beneficiaryAccount: new FormControl(''),
    amount: new FormControl(''),
    content: new FormControl('')
  });
  addMoreValue() {
    this.isBanked = !this.isBanked
  }
}
