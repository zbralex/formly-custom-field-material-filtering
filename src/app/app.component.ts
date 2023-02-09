import { Component } from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form = new FormGroup({});
  model = {};
  options = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'state',
      type: 'select',
      templateOptions: {
        label: 'Select your main technology',
        options: [
          { label: 'Javascript', value: 'javascript' },
          { label: 'Angular', value: 'angular' },
          { label: 'React', value: 'react' },
          { label: 'Vue', value: 'vue' },
          { label: 'Other', value: 'other' }
        ],
      }
    },
  ];

  submit(model: any) {
    console.log(model);
  }
}
