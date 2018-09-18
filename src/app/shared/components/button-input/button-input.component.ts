import { Component, OnInit, Input } from '@angular/core';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-button-input',
  templateUrl: './button-input.component.html',
  styleUrls: ['./button-input.component.scss']
})
export class ButtonInputComponent implements OnInit {
  @Input() text: string;
  buttonHide = false;
  email = null;
  inputHide = false;
  success = false;
  error = null;
  placeholder = {
    text: 'Email',
    error: false
  };
  constructor(private emailService: EmailService) { }
  ngOnInit() {}
  showInput() {
    this.buttonHide = true;
  }
  sendEmail(email) {
    if (!email) {
      this.placeholder = {
        text: 'Introduce un email válido!',
        error: true
      };
      return;
    }
    this.inputHide = true;
    this.emailService.sendEmail(email).subscribe((response: {status: Number}) =>  {
      if (response.status === 200) {
        this.success = true;
      }
    }, () => {
        this.error = true;
    });
  }
  closeErrorAlert() {
    console.log('refresh component!');
  }
  closeSuccessAlert() {
    console.log('refresh component!');
  }
}
