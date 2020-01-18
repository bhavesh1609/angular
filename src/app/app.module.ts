import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatbuttonComponent } from './chatbutton/chatbutton.component';
import { MenuComponent } from './menu/menu.component';
import { CompanylogoComponent } from './companylogo/companylogo.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { BannercardComponent } from './bannercard/bannercard.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatbuttonComponent,
    MenuComponent,
    CompanylogoComponent,
    NavigationbarComponent,
    BannercardComponent,
    TestimonialsComponent,
    ChatboxComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
