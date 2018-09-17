import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../config/app.config';

@Injectable()
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(email) {
    return this.http.post(AppConfig.endpoints.mail, { email });
  }
}
