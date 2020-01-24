import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
 import { AlertsComponent } from './alerts/alerts.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { TabsComponent } from './tabs/tabs.component';
 import { AdminPanelComponent } from './_Component/admin-panel/admin-panel.component';
import { HomeComponent } from './_Component/home/home.component';
import { LoginComponent } from './_Component/user/login/login.component';
import { RegistrationComponent } from './_Component/user/registration/registration.component';
import { AllCategoryComponent } from './_Component/all-category/all-category.component';
import { PAListEditComponent } from './_Component/photos-abum-comp/palist-edit/palist-edit.component';
import { PAEditComponent } from './_Component/photos-abum-comp/paedit/paedit.component';
import { UserComponent } from './_Component/user/user.component';
import { IndexalbumComponent } from './indexalbum/indexalbum.component';
import { IndexAdminComponent } from './_Component/index-admin/index-admin.component';
import { IndexCategoryComponent } from './index-category/index-category.component';
import { IndexAllAlbumComponent } from './index-all-album/index-all-album.component';
import { TTestComponent } from './t-test/t-test.component';
import { ForbiddenComponent } from './_Component/forbidden/forbidden.component';
import { AuthGuard } from './auth/auth.guard';
import { CreateCategoryComponent } from './_Component/create-category/create-category.component';
import { IndexComponent } from './index/index.component';
import { AddAlbumComponent } from './_Component/photos-abum-comp/add-album/add-album.component';

const routes: Routes = [
  { path: '', redirectTo: '/Index', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
    {path:'CreateCategory',component:CreateCategoryComponent,canActivate:[AuthGuard],data :{permittedRoles:['Admin']}},


  { path: 'Index', component: IndexComponent },
  { path: 'IndexCategory', component: IndexCategoryComponent },
  { path: 'IndexAllAlbum/:id', component: IndexAllAlbumComponent },
  { path: 'TTestComponent', component: TTestComponent },
   {path:'Indexadmin',component:IndexAdminComponent,canActivate:[AuthGuard],data :{permittedRoles:['Admin']}},


 { path: 'IndexAlbum/:PhotoId', component: IndexalbumComponent },
   {path:'CreateCategory',component:CreateCategoryComponent,canActivate:[AuthGuard],data :{permittedRoles:['Admin']}},


   {path:'PAListEdit',component:PAListEditComponent,canActivate:[AuthGuard],data :{permittedRoles:['Admin']}},

 
  {path:'PAEditC/:PhotoId',component:PAEditComponent,canActivate:[AuthGuard],data :{permittedRoles:['Admin']}},

 
  {path:'AllCategory',component:AllCategoryComponent,canActivate:[AuthGuard],data :{permittedRoles:['Admin']}},

  { path: 'Login', component: LoginComponent },
  {path:'Registration',component:RegistrationComponent,canActivate:[AuthGuard],data :{permittedRoles:['Admin']}},
 // {path:'Registration',component:RegistrationComponent,canActivate:[AuthGuard]},
  { path: 'User', component: UserComponent },
  { path: 'Home', component: HomeComponent ,canActivate:[AuthGuard]},
  {path:'forbidden',component:ForbiddenComponent},
  {path:'adminpanel',component:AdminPanelComponent,canActivate:[AuthGuard],data :{permittedRoles:['Admin']}},
  { path: 'AddAlbum', component: AddAlbumComponent },
   { path: 'alerts', component: AlertsComponent ,canActivate:[AuthGuard],data :{permittedRoles:['Admin']}},
  { path: 'accordions', component: AccordionsComponent },
  { path: 'tabs', component: TabsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
