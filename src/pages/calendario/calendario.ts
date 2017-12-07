import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';

/**
 * Generated class for the CalendarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendario',
  templateUrl: 'calendario.html',
})
export class CalendarioPage {

	eventos:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase :FirebaseDbProvider, public alertCtrl: AlertController) {
  	this.dbFirebase.getMiseventos().subscribe(eventos =>{
		this.eventos = eventos;
	});

}

muestra(evento){
  let alert = this.alertCtrl.create({
      title: evento.nombre,
      message:'Categoria: ' +evento.categoria+ 
      ' || Hora: ' +evento.hora+
      ' || Fecha: ' +evento.fecha+
      ' || Lugar: ' +evento.lugar+
      ' || Descripcion: ' +evento.descripcion+ 
      ' || Inscripcion: ' +evento.inscripcion+ 
      ' || Requisitos: ' +evento.requisitos,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            // Ha respondido que no así que no hacemos nada
          }
        },
        {
          text: 'Eliminar de mi lista',
          handler: () => {
              this.dbFirebase.eliminarEventoUsuario(evento.id);
           }
        }
      ]
    });
    
    alert.present();
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarioPage');
  }

}
