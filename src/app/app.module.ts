import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyMaterialModule} from '@ngx-formly/material';
import {MatNativeDateModule} from '@angular/material/core';
import {FormlyMatDatepickerModule} from '@ngx-formly/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {FormlyCustom} from './custom-types/formly-custom';
import {MatSelectModule} from '@angular/material/select';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {FilterPipe} from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormlyCustom,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormlyModule.forRoot({
      extras: {lazyRender: true},
      types: [
        {name: 'select', component: FormlyCustom},
      ],
      validationMessages: [
        {name: 'required', message: 'This field required'},
      ]

    }),
    FormlyMaterialModule,
    MatNativeDateModule,
    FormlyMatDatepickerModule,
    MatIconModule,
    MatSelectModule,
    NgxMatSelectSearchModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
