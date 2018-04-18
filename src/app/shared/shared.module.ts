import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SharedRoutingModule} from './shared-routing.module';

import {MessageService} from './services/message.service';
import {AuthGuardService} from './auth/auth-guard.service';
import {AuthInterceptorService} from './auth/auth-interceptor.service';
import {AuthService} from './auth/auth.service';
import {JwtService} from '../shared/services/jwt.service';
import {ShowAuthedDirective} from './show-authed.directive';
import {ShowIfAdminDirective} from './show-if-admin.directive';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    SharedRoutingModule
  ],
  exports: [
    ShowAuthedDirective,
    ShowIfAdminDirective
  ],
  declarations: [
    ShowAuthedDirective,
    ShowIfAdminDirective
  ],
  providers: []
})
export class SharedModule {
}
