import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../config/app.config';

@Injectable()
export class MailService {

  constructor(private http: HttpClient) { }

  sendMail(email) {
    this.http.post(AppConfig.endpoints.mail, { email });
  }
}
