import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';


bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
