import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { BetaloginComponent } from './betalogin/betalogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesComponent } from './messages/messages.component';
import { PetsComponent } from './pets/pets.component';
import { StayoversComponent} from './stayovers/stayovers.component';
import { ServicesComponent } from './services/services.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { AboutComponent } from './about/about.component';
import { CaretakerinfoComponent } from './caretakerinfo/caretakerinfo.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page404/404.component';
import { AddpetComponent } from './addpet/addpet.component';
import { AddserviceComponent } from './addservice/addservice.component';
import { EditpetComponent } from './editpet/editpet.component';
import { EditserviceComponent } from './editservice/editservice.component';
import { SearchComponent } from './search/search.component';
import { ServicerequestComponent } from './servicerequest/servicerequest.component';
import {ServicereviewComponent} from './servicereview/servicereview.component';


// TODO: To drop the beta login, redirect the root path to home

const routes: Routes = [
  { path: '', component: BetaloginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'caretakerinfo', component: CaretakerinfoComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'pets', component: PetsComponent },
  { path: 'stayovers', component: StayoversComponent },
  { path: 'services', component:  ServicesComponent },
  { path: 'editprofile', component: EditprofileComponent },
  { path: 'addpet', component: AddpetComponent },
  { path: 'addservice', component: AddserviceComponent },
  { path: 'editpet/:id', component: EditpetComponent },
  { path: 'editservice/:id', component: EditserviceComponent },
  { path: 'search', component: SearchComponent },
  { path: 'search/:filter', component: SearchComponent },
  { path: 'servicerequest/:id', component: ServicerequestComponent },
  { path: 'servicereview/:id', component: ServicereviewComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
      )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}


