import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { CopieRoutingModule } from './copie-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CopieRoutingModule,
    SharedModule
  ],
  declarations: [
    IndexComponent
  ]
})
export class CopieModule { }
