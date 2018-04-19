import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  @Input() dtData: Array<any> = [];
  @Input() canRemove: Boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
