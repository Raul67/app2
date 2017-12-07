import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';


@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {

	  eventosA:any;
    eventosM:any;
    eventosT:any;
    eventosC:any;
    eventosI:any;
    eventosL:any;

    constructor(public navCtrl: NavController, 
public dbFirebase :FirebaseDbProvider, public alertCtrl: AlertController){


this.dbFirebase.getArte().subscribe(eventosA =>{
	this.eventosA = eventosA;
});

this.dbFirebase.getMusica().subscribe(eventosM =>{
	this.eventosM = eventosM;
});

this.dbFirebase.getTecnologia().subscribe(eventosT =>{
	this.eventosT = eventosT;
});

this.dbFirebase.getCiencias().subscribe(eventosC =>{
	this.eventosC = eventosC;
});

this.dbFirebase.getIdiomas().subscribe(eventosI =>{
	this.eventosI = eventosI;
});

this.dbFirebase.getLetras().subscribe(eventosL =>{
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
    console.log('ionViewDidLoad EventosPage');
  }

}
