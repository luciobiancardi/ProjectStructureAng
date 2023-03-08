import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingUpRoutingModule } from './sing-up-routing.module';
import { SingUpComponent } from './sing-up.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SingUpComponent
  ],
  imports: [
    CommonModule,
    SingUpRoutingModule,
    SharedModule
  ]
})
export class SingUpModule { }
