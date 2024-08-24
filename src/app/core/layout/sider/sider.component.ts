import { Component, OnInit } from '@angular/core';
import { faFileInvoice, faUser, faUserEdit, faHome } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sider',
  // standalone: true,
  //imports: [CommonModule, NzLayoutModule, FontAwesomeModule, NzMenuModule],
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.scss'],
  providers: [AuthService]
})
export class SiderComponent {
  
  faFileInvoice = faFileInvoice;
  faUser = faUser;
  faUserEdit = faUserEdit;
  faHome = faHome;
}
