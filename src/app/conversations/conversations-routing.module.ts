import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConversationListComponent} from "./conversation-list/conversation-list.component";
import {AuthGuardService} from "../shared/auth/auth-guard.service";

const routes: Routes = [{
    path: 'conversations',
    component: ConversationListComponent, canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConversationsRoutingModule { }
