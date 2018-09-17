import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

const copieRoutes: Routes = [
  { path: '', component: IndexComponent }
];
@NgModule({
  imports: [
    RouterModule.forChild(copieRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CopieRoutingModule { }
