import { Component } from '@angular/core';
import { IonicPage, 
  NavController, 
  LoadingController, 
  Loading, 
  AlertController,
  ViewController  } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';

@IonicPage()
@Component({
  selector: 'page-crear1',
  templateUrl: 'crear1.html',
})
export class Crear1Page {
	
	public eventoForm: FormGroup;

categoria: string;
nombre: string;
hora: string;
fecha: string;
lugar: string;
descripcion: string;
inscripcion: string;
requisitos: string;

  constructor(public nav: NavController, 
    public formBuilder: FormBuilder, public loadingCtrl: LoadingController, 
    public alertCtrl: AlertController,private viewCtrl : ViewController,private dbFirebase :FirebaseDbProvider) {
    	this.eventoForm = formBuilder.group({
    		categoria:['',Validators.compose([Validators.required])],
    		nombre:['',Validators.compose([Validators.required])],
    		hora:['',Validators.compose([Validators.required])],
    		fecha:['',Validators.compose([Validators.required])],
    		lugar:['',Validators.compose([Validators.required])],
    		descripcion:['',Validators.compose([Validators.required])],
    		inscripcion:['',Validators.compose([Validators.required])],
    		requisitos:['',Validators.compose([Validators.required])],
    	});
    }

    guardarEvento(evento){
    	if(!this.eventoForm.valid){
    		console.log(this.eventoForm.value);
    	}

    	else{
    		let evento = {
    			categoria: this.eventoForm.value.categoria,
    			nombre: this.eventoForm.value.nombre,
    			hora: this.eventoForm.value.hora,
    			fecha: this.eventoForm.value.fecha,
    			lugar: this.eventoForm.value.lugar,
    			descripcion: this.eventoForm.value.descripcion,
    			inscripcion: this.eventoForm.value.inscripcion,
    			requisitos: this.eventoForm.value.requisitos,
    		}
    		this.dbFirebase.guardarEvento(evento).then(res=>{
        	console.log('evento guardado en firebase:');

        	let alert = this.alertCtrl.create({
      title: 'Solicitud Enviada',
      message: 'El evento necesita aprobación por parte de la administración, recibirás una respuesta en un lapso de 3 días',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
          this.viewCtrl.dismiss(); 
          }
        }
      ]
    });
    
    alert.present();

    		})
    	}
    }
}
