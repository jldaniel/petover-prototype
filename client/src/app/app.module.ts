import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Service and component for beta login
import { BetaloginComponent } from './betalogin/betalogin.component';
import { BetaloginService } from './betalogin/betalogin.service';

import { HomeComponent} from './home/home.component';
import { PageNotFoundComponent } from './page404/404.component';
import {AboutComponent} from './about/about.component';
import {LoginComponent} from './login/login.component';
import {ApiService} from './api/api.service';



// TODO Routing is broken for login and about
const appRoutes: Routes = [
  { path: 'beta', component: BetaloginComponent },
  { path: 'home',
    component: HomeComponent,
    children:  [
      { path: 'login', component: LoginComponent },
      { path: 'about', component: AboutComponent }
    ]},
  { path: '', redirectTo: '/beta', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BetaloginComponent,
    PageNotFoundComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // for debugging
    ),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    BetaloginService,
    ApiService
  ],
  exports: [
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

