import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GreetingPipe } from './pipes/greeting.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavBarComponent,
    GreetingPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    GreetingPipe,
    NavBarComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
