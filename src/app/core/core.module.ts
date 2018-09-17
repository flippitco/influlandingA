import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { RouterModule } from '@angular/router';
// import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';
import { SlideOneComponent } from './components/slide-one/slide-one.component';
import { SlideTwoComponent } from './components/slide-two/slide-two.component';
import { SlideThreeComponent } from './components/slide-three/slide-three.component';
import { SlideFourComponent } from './components/slide-four/slide-four.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    // SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent,
    Error404Component,
    SlideOneComponent,
    SlideTwoComponent,
    SlideThreeComponent,
    SlideFourComponent,
  ],
  exports: [
    Error404Component,
  ],
  providers: []
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
