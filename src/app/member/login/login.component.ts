import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from "../../shared/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') form: any;

  constructor(private authservice: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      this.authservice.login(this.form.value.email, this.form.value.password)
        .subscribe(
          data => this.router.navigateByUrl('/'),
          err => {
            console.log(err);
          }
        );

      //this.form.reset();
    }
  }

}
