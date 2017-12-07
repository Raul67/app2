import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule} from 'angularfire2/database';

import { AuthService } from '../providers/auth-service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/signup/signup';
import {MenugeneralPage} from  '../pages/menugeneral/menugeneral';
import {MytabsPage} from '../pages/mytabs/mytabs';
import { InteresesPage } from '../pages/intereses/intereses';
import { FirebaseDbProvider } from '../providers/firebase-db/firebase-db';
import { CreatePage } from '../pages/create/create';
import { EventosparatiPage } from '../pages/eventosparati/eventosparati';
import { CalendarioPage } from '../pages/calendario/calendario';
import { EventosPage } from '../pages/eventos/eventos';


export const firebaseConfig = {
  apiKey:"AIzaSyDxM_KiTb4Il55bivqYxyi4ieBu7kirdBk",
  authDomain: "learnsintown.firebaseapp.com",
  databaseURL: "https://learnsintown.firebaseio.com",
  projectId: "learnsintown",
  storageBucket: "",
  messagingSenderId: "684530885635"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignUpPage,
    MenugeneralPage,
    MytabsPage,
    InteresesPage,
    CreatePage,
    EventosparatiPage,
    CalendarioPage,
    EventosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig,'learnsintown'),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignUpPage,
    MenugeneralPage,
    MytabsPage,
    InteresesPage,
    CreatePage,
    EventosparatiPage,
    CalendarioPage,
    EventosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    FirebaseDbProvider
  ]
})
export class AppModule {}
