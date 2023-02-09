import {Component, OnInit} from '@angular/core';
import {FieldType, FieldTypeConfig} from '@ngx-formly/core';

@Component({
    selector: 'formly-custom',
    template: `
        <mat-select [formControl]="formControl" [formlyAttributes]="field">
            <mat-option>
                <ngx-mat-select-search
                        [(ngModel)]="filteredData"
                        [ngModelOptions]="{standalone: true}"
                        [noEntriesFoundLabel]="'Ничего не найдено'"
                        [placeholderLabel]="'Поиск'">
                    <mat-icon ngxMatSelectSearchClear>clear</mat-icon>
                </ngx-mat-select-search>
            </mat-option>

            <mat-option *ngFor="let item of listItems | filter: filteredData : 'label'" [value]="item.value">
                {{item.label}}
            </mat-option>
        </mat-select>
    `,
})


export class FormlyCustom extends FieldType <FieldTypeConfig> implements OnInit {
    listItems: any = [];
    filteredData = '';

    ngOnInit(): void {
        this.listItems = this.field.templateOptions.options;
    }


}
