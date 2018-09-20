import { InjectionToken } from '@angular/core';
import { IAppConfig } from './iapp.config';
// import { environment } from '../../environments/environment';

export let APP_CONFIG = new InjectionToken('app.config');
const copieBasePath = 'copie';

export const AppConfig: IAppConfig = {
  routes: {
    home: '',
    error404: '404',
  },
  endpoints: {
    mail: 'https://mail-microservice.herokuapp.com/api/email'
  }
};
