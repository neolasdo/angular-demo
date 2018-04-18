import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MemberModule } from './member/member.module';
import { SharedModule } from './shared/shared.module';
import { ApiService } from './shared/services/api.service';
import { UserService } from './member/user.service';

import {
  MessageService,
  AuthGuardService,
  AuthInterceptorService,
  AuthService,
  JwtService
 } from "./shared";
import {ConversationsModule} from "./conversations/conversations.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    SharedModule,
    AppRoutingModule,
    MemberModule,
    ConversationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
    Title,
    MessageService,
    AuthGuardService,
    AuthInterceptorService,
    AuthService,
    JwtService,
    ApiService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
