import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from './services/language.service';
import { ButtonInputComponent } from './components/button-input/button-input.component';
import { EmailService } from './services/email.service';
import { FormsModule } from '@angular/forms';
import { ButtonInputDesktopComponent } from './components/button-input-desktop/button-input-desktop.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    FormsModule
  ],
  declarations: [
  ButtonInputComponent,
  ButtonInputDesktopComponent
],
  exports: [
    TranslateModule,
    ButtonInputComponent,
    ButtonInputDesktopComponent
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
