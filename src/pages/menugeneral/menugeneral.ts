import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CreatePage } from '../create/create';
import { EventosparatiPage } from '../eventosparati/eventosparati';
import { CalendarioPage } from '../calendario/calendario';
import { EventosPage } from '../eventos/eventos';
import { HomePage } from '../home/home';

import { AuthService } from '../../providers/auth-service';


@IonicPage()
@Component({
  selector: 'page-menugeneral',
  templateUrl: 'menugeneral.html',
})
export class MenugeneralPage {

  usuario: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenugeneralPage');
  }

  crear(){
      this.navCtrl.push(CreatePage);
    }

  evpm(){
      this.navCtrl.push(EventosparatiPage);
    }

  asistir(){
      this.navCtrl.push(CalendarioPage);
    }

  todosev(){
      this.navCtrl.push(EventosPage);
    }

	signOut(){
		this.authService.signOut();
		this.navCtrl.setRoot(HomePage);
	}

}
