import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCEsgmW5X2CaCDqBZ-55k1CnvM0x4a4uRc",
  authDomain: "angular-firebase-5ddf0.firebaseapp.com",
  projectId: "angular-firebase-5ddf0",
  storageBucket: "angular-firebase-5ddf0.appspot.com",
  messagingSenderId: "1047675237419",
  appId: "1:1047675237419:web:9b7aac97b10b737b40a66e"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth())
  ]
};
