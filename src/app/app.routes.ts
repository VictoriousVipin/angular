import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LogoutComponent } from './logout/logout.component';
import {AboutCompanyComponent} from './about/about-company/about-company.component';
import {AboutEmployeeComponent} from './about/about-employee/about-employee.component';
import { Routes } from '@angular/router';
export const AppRoutes: Routes = [{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      {path: '', redirectTo: 'about-company', pathMatch: 'full'}, 
      {path: 'about-company', component: AboutCompanyComponent}, 
      {path: 'about-employee', component: AboutEmployeeComponent}, 
    ]
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'new',
    loadChildren: './inner-module/inner-module.module#InnerModuleModule'
  }]