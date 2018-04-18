import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversationsRoutingModule } from './conversations-routing.module';
import { ConversationListComponent } from './conversation-list/conversation-list.component';

@NgModule({
  imports: [
    CommonModule,
    ConversationsRoutingModule
  ],
  declarations: [ConversationListComponent]
})
export class ConversationsModule { }
