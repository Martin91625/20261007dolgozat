/*
* File: main.ts
* Author: El Miri Martin
* Copyright: 2026, El Miri Martin
* Group: Szoft II/N
* Date: 2026-10-12
* Github: https://github.com/Martin91625/
* Licenc: MIT
*/


import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
