import { Component, OnInit, Input } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-input-desktop',
  templateUrl: './button-input-desktop.component.html',
  styleUrls: ['./button-input-desktop.component.scss']
})
export class ButtonInputDesktopComponent implements OnInit {
  @Input() text: string;
  buttonText: string;
  buttonHide: boolean;
  email: string;
  inputHide: boolean;
  success: boolean;
  error: boolean;
  placeholder: { text: string, error: boolean };
  constructor(private emailService: EmailService, private router: Router) { }
  ngOnInit() {
    this.buttonText = '';
    setTimeout(() => {
      this.buttonText = this.text;
    }, 500);
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
  showInput() {
    this.buttonHide = true;
  }
  sendEmail(email)  {
    if (!email) {
      this.placeholder = {
        text: 'Introduce un email válido!',
        error: true
      };
      return;
    }
    this.inputHide = true;
    this.emailService.sendEmail(email).subscribe((response: { status: Number }) => {
      if (response.status === 200) {
        this.success = true;
      }
    }, () => {
      this.error = true;
    });
  }
  closeAlert() {
    this.ngOnInit();
  }
}
