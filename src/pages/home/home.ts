
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignUpPage } from  '../signup/signup';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

AbrirIniciarSesion(){
this.navCtrl.push(LoginPage);

}

AbrirRegistrarse(){
this.navCtrl.push(SignUpPage);

}

   	
}
