import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { InfoComponent } from './Component/info/info.component';
import { ContactUsComponent } from './Component/contact-us/contact-us.component';

const routes: Routes = [


  {path:'' , redirectTo:'home',pathMatch:'full' , title:'Garden'},
  {path:'home' , component:HomeComponent, title:'Home'},
  {path:'info' , component:InfoComponent , title:'Info'},
  {path:'contactus' , component:ContactUsComponent , title:'ContactUs'},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
