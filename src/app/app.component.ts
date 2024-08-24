import { Component } from '@angular/core';
import { faCopyright, faUser, faFileInvoice, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = true;

  isLoggedIn$!: Observable<boolean>;
  
  title = 'DilekçeYazdir';
  
  faCopyright = faCopyright;
  faFileInvoice = faFileInvoice;
  faUser = faUser;
  faUserEdit = faUserEdit;

  constructor(private router: Router, private authService: AuthService, private cookieService: CookieService, private notification: NzNotificationService) { 
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/auth' || event.url === '/' || event.url === '/register') {
          this.cookieService.deleteAll();

          this.createNotification('info');
          this.isCollapsed = false;
        } else {
          this.isCollapsed = true;
        }
      }
    })
  }

  createNotification(type: string): void {
    this.notification.create(
      type,
      'Notification Title',
      'You are logged out already. If you want to continue please sign in.',
      {
        nzStyle: {
          width: '600px',
          marginLeft: '-265px'
        },
        nzClass: 'test-class'
      }
    );
  }

  
}
