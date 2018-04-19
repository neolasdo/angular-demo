import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversation-list',
  templateUrl: './conversation-list.component.html',
  styleUrls: ['./conversation-list.component.scss']
})
export class ConversationListComponent implements OnInit {

  data: Array<any> = [];
  constructor() { }
  ngOnInit() {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/fake.json`);

    req.onload = () => {
        this.data = JSON.parse(req.response);
        console.log(this.data);
    };
    req.send();
  }
}
