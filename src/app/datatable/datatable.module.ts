import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DatatableComponent} from './datatable/datatable.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        DatatableComponent
    ]
    ,
    declarations: [
        DatatableComponent
    ]
})

export class DatatableModule {
}
