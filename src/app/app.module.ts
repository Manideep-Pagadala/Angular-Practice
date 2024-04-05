import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupComponent } from './group/group.component';
import { LoginComponent } from './group/login/login.component';
import { RegComponent } from './group/reg/reg.component';
import { HeaderComponent } from './group/header/header.component';
import { FooterComponent } from './group/footer/footer.component';
import { HomeComponent } from './group/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    GroupComponent,
    LoginComponent,
    RegComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
