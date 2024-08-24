import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';

import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline
} from '@ant-design/icons-angular/icons';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

import { PagesRoutingModule } from './pages-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ManagementViewComponent } from './management-view/management-view.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListComponent } from './management-view/app-pages/list/list.component';
import { CreateComponent } from './management-view/app-pages/create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const icons = [MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline];

@NgModule({
  declarations: [
    NotFoundComponent,
    ManagementViewComponent,
    ListComponent,
    CreateComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PagesRoutingModule,
    FontAwesomeModule,
    NzLayoutModule,
    NzMenuModule,
    NzDividerModule,
    NzCardModule,
    NzInputModule,
    NzButtonModule,
    NzSelectModule,
    NzTableModule,
    NzDatePickerModule,
    NzIconModule.forChild(icons)
  ],
  providers: []
})
export class PagesModule { }
