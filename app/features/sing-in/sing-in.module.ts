import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingInRoutingModule } from './sing-in-routing.module';
import { SingInComponent } from './sing-in.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SingInComponent
  ],
  imports: [
    CommonModule,
    SingInRoutingModule,
    SharedModule
  ]
})
export class SingInModule { }
