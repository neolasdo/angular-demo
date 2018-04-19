import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversationsRoutingModule } from './conversations-routing.module';
import { ConversationListComponent } from './conversation-list/conversation-list.component';
import {DatatableModule} from '../datatable/datatable.module';

@NgModule({
  imports: [
    CommonModule,
    ConversationsRoutingModule,
    DatatableModule
  ],
  declarations: [ConversationListComponent]
})
export class ConversationsModule { }
