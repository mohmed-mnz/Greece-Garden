import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { InfoComponent } from './Component/info/info.component';
import { ContactUsComponent } from './Component/contact-us/contact-us.component';
import { OurworkComponent } from './Component/ourwork/ourwork.component';
import { EngineerComponent } from './Component/engineer/engineer.component';

const routes: Routes = [


  { path: '', redirectTo: 'home', pathMatch: 'full', title: 'Garden' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'info', component: InfoComponent, title: 'Info' },
  { path: 'contactus', component: ContactUsComponent, title: 'ContactUs' },
  { path: 'about', component: OurworkComponent, title: 'OurWork' },
  { path: 'engineer', component: EngineerComponent, title: 'engineer' },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
