import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { SiderComponent } from "./core/layout/sider/sider.component";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { JwtModule } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';
import { HeaderInterceptor } from './services/shared/helpers/interceptors/header.interceptor';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzNotificationModule } from 'ng-zorro-antd/notification';


registerLocaleData(en);

export function tokenGetter() {
  return localStorage.getItem('token')
}

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        SiderComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
        { provide: NZ_I18N, useValue: en_US }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule,
        FontAwesomeModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-top-right',
            preventDuplicates: true,
        }),
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
                allowedDomains: ["127.0.0.1:4000"],
            },
        }),
        IconsProviderModule,
        NzLayoutModule,
        NzMenuModule,
        NzDropDownModule,
        NzNotificationModule,
    ]
})
export class AppModule { 

}

