import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {AuthService} from '../providers/auth-service';

import {LoginPage} from '../pages/login/login';
import {MenugeneralPage} from  '../pages/menugeneral/menugeneral';
import {MytabsPage} from  '../pages/mytabs/mytabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(
        platform: Platform,
        statusBar: StatusBar,
        splashScreen: SplashScreen,
        authService: AuthService) {
        if (authService.authenticated) {
            this.rootPage = LoginPage;
        } else {
            this.rootPage = MenugeneralPage;
        }

        platform.ready().then(() => {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
}