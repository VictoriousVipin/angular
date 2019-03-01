//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LogoutComponent } from './logout/logout.component';

//Services
import { HomeService } from './home/home.service';
import { AboutService } from './about/about.service';
import { ContactService } from './contact/contact.service';

//Routes
import {AppRoutes} from './app.routes';
import { PublisherComponent } from './messaging/publisher/publisher.component';
import { SubscriberComponent } from './messaging/subscriber/subscriber.component';
import { MessagingComponent } from './messaging/messaging.component';
import { AboutCompanyComponent } from './about/about-company/about-company.component';
import { AboutEmployeeComponent } from './about/about-employee/about-employee.component';
import { MydatePipe, SquarerootPipe, PowerofPipe } from './pipes/mydate.pipe';
import { MakeredDirective, MakeGreenDirective, MakeColoredDirective, MyIfDirective } from './makered.directive';
import { DeekshaDirective } from './deeksha.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LogoutComponent,
    PublisherComponent,
    SubscriberComponent,
    MessagingComponent,
    AboutCompanyComponent,
    AboutEmployeeComponent,
    MydatePipe,
    SquarerootPipe,
    PowerofPipe,
    MakeredDirective,
    MakeGreenDirective,
    MakeColoredDirective,
    MyIfDirective,
    DeekshaDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [HomeService, AboutService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
