import {Component, OnInit} from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {MessageService} from "./shared/services/message.service";
import {AuthService} from "./shared/auth/auth.service";
import {User} from "./member/user.model";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message: any;
  subscription: Subscription;

  constructor(private messageService: MessageService, private authService: AuthService, private router: Router) {

  }

  currentUser: User;

  ngOnInit() {
    this.authService.populate();

    this.authService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    );

    window.setInterval(() => {
      this.messageService.sendMessage('UPDATE_ALL_WIDGET');
    }, environment.auto_refresh_after);
  }

  broadcastDoRefresh($event) {
    $event.preventDefault();
    this.messageService.sendMessage('UPDATE_ALL_WIDGET');
  }

  logout(event) {
    event.preventDefault();
    this.authService.logout();

    this.router.navigateByUrl('/members/login');
  }

}
