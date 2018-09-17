import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from './services/language.service';
import { ButtonInputComponent } from './components/button-input/button-input.component';
import { EmailService } from './services/email.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    FormsModule
  ],
  declarations: [
  ButtonInputComponent
],
  exports: [
    TranslateModule,
    ButtonInputComponent
  ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        LanguageService,
        EmailService
      ]
    };
  }
}
