import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './management-view/app-pages/list/list.component';
import { CreateComponent } from './management-view/app-pages/create/create.component';

const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'list', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
