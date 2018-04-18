import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

import { AuthService } from './auth/auth.service';

@Directive({ selector: '[appShowIfAdmin]' })
export class ShowIfAdminDirective implements OnInit {
  constructor(
    private templateRef: TemplateRef<any>,
    private authService: AuthService,
    private viewContainer: ViewContainerRef
  ) {}

  condition: boolean;

  ngOnInit() {
    this.authService.currentUser.subscribe(
      (currentUser) => {        
        if (currentUser) {
          if (currentUser.is_admin && this.condition || !currentUser && !this.condition) {
            this.viewContainer.createEmbeddedView(this.templateRef);
          }          
        } else {
          this.viewContainer.clear();
        }
      }
    );
  }

  @Input() set appShowIfAdmin(condition: boolean) {
    this.condition = condition;
  }

}