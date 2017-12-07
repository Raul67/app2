import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams, 
  	public authService: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }


abrirCrear1(){
	this.navCtrl.push('Crear1Page');
}

	


}
