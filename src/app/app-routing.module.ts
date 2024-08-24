import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './modules/pages/not-found/not-found.component';
import { authGuard } from './services/shared/helpers/guards/auth.guard';

const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./modules/pages/pages.module').then(module => module.PagesModule),
    //canActivate: [authGuard],
  },
  { path: '', pathMatch: 'full', redirectTo: 'pages/create' },
  { path: '**', component: NotFoundComponent }, // wildcard route method
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
