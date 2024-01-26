import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { FooterComponent } from './Component/footer/footer.component';
import { InfoComponent } from './Component/info/info.component';
import { SliderComponent } from './Component/slider/slider.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { ContactUsComponent } from './Component/contact-us/contact-us.component';
import { ServiesComponent } from './Component/servies/servies.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { OurworkComponent } from './Component/ourwork/ourwork.component';
import { EngineerComponent } from './Component/engineer/engineer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactUsComponent,
    InfoComponent,
    SliderComponent,
    HomeComponent,
    ServiesComponent,
    OurworkComponent,
    EngineerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
