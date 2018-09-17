import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppConfig } from './config/app.config';
import { HomeComponent } from './core/home/home.component';
import { Error404Component } from './core/error404/error404.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: AppConfig.routes.error404, component: Error404Component },
  { path: '**', redirectTo: '/' + AppConfig.routes.error404 }

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
