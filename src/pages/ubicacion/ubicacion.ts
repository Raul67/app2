import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UbicacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ubicacion',
  templateUrl: 'ubicacion.html',
})
export class UbicacionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 AbrirMenuGeneral(){
this.navCtrl.push('MenugeneralPage');

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UbicacionPage');
  }

}
