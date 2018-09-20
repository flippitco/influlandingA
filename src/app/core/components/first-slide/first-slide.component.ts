import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../../shared/services/email.service';

@Component({
  selector: 'app-first-slide',
  templateUrl: './first-slide.component.html',
  styleUrls: ['./first-slide.component.scss']
})
export class FirstSlideComponent implements OnInit {
  buttonHide: boolean;
  email: string;
  inputHide: boolean;
  success: boolean;
  error: boolean;
  placeholder: { text: string, error: boolean };
  constructor(public emailService: EmailService) { }

  ngOnInit() {
    this.buttonHide = false;
    this.email = '';
    this.inputHide = false;
    this.success = false;
    this.error = false;
    this.placeholder = {
      text: 'Email',
      error: false
    };
  }
  sendEmail(email)  {
    if (!email) {
      this.placeholder = {
        text: 'Introduce un email válido!',
        error: true
      };
      return;
    }
    this.emailService.sendEmail(email).subscribe((response: { status: Number }) => {
      if (response.status === 200) {
        this.success = true;
      }
    }, () => {
      this.error = true;
    });
  }
}
