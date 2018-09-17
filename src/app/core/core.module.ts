import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';
import { FirstSlideComponent } from './components/first-slide/first-slide.component';
import { SecondSlideComponent } from './components/second-slide/second-slide.component';
import { ThirdSlideComponent } from './components/third-slide/third-slide.component';
import { FourthSlideComponent } from './components/fourth-slide/fourth-slide.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent,
    Error404Component,
    FirstSlideComponent,
    SecondSlideComponent,
    ThirdSlideComponent,
    FourthSlideComponent,
    FooterComponent,
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
