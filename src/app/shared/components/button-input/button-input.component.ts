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
  constructor(private emailService: EmailService) { }
  ngOnInit() {}
  showInput() {
    this.buttonHide = true;
  }
  sendEmail(email) {
    this.emailService.sendEmail(email).subscribe((response: {status: Number}) =>  {
      if (response.status === 200) {
        console.log('Email mandado!');
        email = null;
      } else {
        console.log('Error al mandar el mail!');
      }
    });
  }
}
