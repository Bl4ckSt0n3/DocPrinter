import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IconDefinition, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CookieService } from 'ngx-cookie-service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { ConfigService } from 'src/app/services/config.service';
import { DataTransferService } from 'src/app/services/shared/helpers/data-transfer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isCollapsed = false;
  faSignOut: IconDefinition = faSignOutAlt;
  @Input() title: string = "";
  constructor(
    private router: Router, 
    private authService: AuthService, 
    ){
  }
  public redirect(urlParam: string): void {
    
    this.router.navigate([urlParam]);
  }
  // public get isAuth() {
  //   return this.authService.isAuth();
  // }


}
