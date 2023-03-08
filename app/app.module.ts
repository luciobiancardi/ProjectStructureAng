import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileModule } from './features/profile/profile.module';
import { HomeModule } from './features/home/home.module';
import { SharedModule } from './shared/shared.module';
import { SingInModule } from './features/sing-in/sing-in.module';
import { SingUpModule } from './features/sing-up/sing-up.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ProfileModule,
    HomeModule,
    SingInModule,
    SingUpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
