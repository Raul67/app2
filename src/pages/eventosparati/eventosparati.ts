import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';


/**
 * Generated class for the EventosparatiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventosparati',
  templateUrl: 'eventosparati.html',
})
export class EventosparatiPage {

	eventosA:any;
  eventosM:any;
  eventosT:any;
  eventosC:any;
  eventosI:any;
  eventosL:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase: FirebaseDbProvider, public alertCtrl: AlertController) {

    this.dbFirebase.getArtepm(this.dbFirebase.infoUsuario()).subscribe(eventosA =>{
		  this.eventosA = eventosA;
	   });

     this.dbFirebase.getMusicapm(this.dbFirebase.infoUsuario()).subscribe(eventosM =>{
      this.eventosM = eventosM;
     });

     this.dbFirebase.getTecnologiapm(this.dbFirebase.infoUsuario()).subscribe(eventosT =>{
      this.eventosT = eventosT;
     });

     this.dbFirebase.getCienciaspm(this.dbFirebase.infoUsuario()).subscribe(eventosC =>{
      this.eventosC = eventosC;
     });

     this.dbFirebase.getIdiomaspm(this.dbFirebase.infoUsuario()).subscribe(eventosI =>{
      this.eventosI = eventosI;
     });

     this.dbFirebase.getLetraspm(this.dbFirebase.infoUsuario()).subscribe(eventosL =>{
      this.eventosL = eventosL;
     });
  }

  muestra(evento){
  let alert = this.alertCtrl.create({
      title: evento.nombre,
      message: 'Hora: ' +evento.hora+
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
          text: 'Agregar a mi lista',
          handler: () => {
              this.dbFirebase.guardarEventoUsuario(evento).then(res=>{
             })
           }
        }
      ]
    });
    
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventosparatiPage');
  }

}
