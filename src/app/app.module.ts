import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
 import { AlertsComponent } from './alerts/alerts.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { TabsComponent } from './tabs/tabs.component';
 import { IndexAdminComponent } from './_Component/index-admin/index-admin.component';
import { TTestComponent } from './t-test/t-test.component';
import { IndexalbumComponent } from './indexalbum/indexalbum.component';
import { IndexCategoryComponent } from './index-category/index-category.component';
import { AllCategoryComponent } from './_Component/all-category/all-category.component';
import { UploadComponent } from './_Component/upload/upload.component';
import { PAListEditComponent } from './_Component/photos-abum-comp/palist-edit/palist-edit.component';
import { PAEditComponent } from './_Component/photos-abum-comp/paedit/paedit.component';
import { UserComponent } from './_Component/user/user.component';
import { RegistrationComponent } from './_Component/user/registration/registration.component';
import { LoginComponent } from './_Component/user/login/login.component';
import { HomeComponent } from './_Component/home/home.component';
import { ForbiddenComponent } from './_Component/forbidden/forbidden.component';
import { AdminPanelComponent } from './_Component/admin-panel/admin-panel.component';
import { IndexComponent } from './index/index.component';
import { IndexAllAlbumComponent } from './index-all-album/index-all-album.component';
import { HttpClientModule } from '@angular/common/http';
import { PathUrlsModule } from './_Classes/path-urls/path-urls.module';
import {  HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
 import { HttpModule } from '@angular/http';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { PhotosAlbumService } from './_Services/photos-album.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { CreateCategoryComponent } from './_Component/create-category/create-category.component';



import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AddAlbumComponent } from './_Component/photos-abum-comp/add-album/add-album.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
     AlertsComponent,
    AccordionsComponent,
    TabsComponent,
    AppComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    AlertsComponent,
     AllCategoryComponent,
     UploadComponent,
NavbarComponent,
     CreateCategoryComponent,
    PAListEditComponent,
    PAEditComponent,   
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    ForbiddenComponent,
    AdminPanelComponent,
    IndexComponent,
    IndexCategoryComponent,
    IndexAllAlbumComponent,
    IndexalbumComponent,
    TTestComponent,
    IndexAdminComponent,
    AddAlbumComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
      ToastrModule
      ,
     BrowserAnimationsModule,
    
    ReactiveFormsModule,
    DataTablesModule,
    HttpClientModule,
    HttpModule,
PathUrlsModule,
 ToastrModule.forRoot() // ToastrModule added
,
    NgbModule.forRoot( )

  ],
  
  providers: [PhotosAlbumService,AlertsComponent,{
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,


  }],
  schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }