import { InjectionToken } from '@angular/core';
import { IAppConfig } from './iapp.config';
// import { environment } from '../../environments/environment';

export let APP_CONFIG = new InjectionToken('app.config');
const copieBasePath = 'copie';

export const AppConfig: IAppConfig = {
  routes: {
    home: '',
    copie: {
      basePath: copieBasePath
    },
    error404: '404',
  },
  endpoints: {}
};
