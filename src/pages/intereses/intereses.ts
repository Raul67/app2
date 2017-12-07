import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,
		Loading, AlertController,ViewController } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';

import { AuthService } from '../../providers/auth-service';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-intereses',
  templateUrl: 'intereses.html',
})
export class InteresesPage {

	public infoForm: FormGroup;

	id:string;
	nombre: string;
	edad: string;
	arte: string;
	musica: string;
	tecnologia: string;
	ciencias: string;
	idiomas: string;
	letras: string;

  constructor(public nav: NavController, 
    public formBuilder: FormBuilder, public loadingCtrl: LoadingController, 
    public alertCtrl: AlertController,private viewCtrl : ViewController, private navCtrl: NavController,
    private dbFirebase :FirebaseDbProvider, private auth: AuthService) {
    	this.infoForm = formBuilder.group({
    		id: this.auth.getUser(),
    		nombre:['',Validators.compose([Validators.required])],
    		edad:['',Validators.compose([Validators.required])],
    		arte: "false",
    		musica: "false",
    		tecnologia:"false",
    		ciencias: "false",
    		idiomas: "false",
    		letras:"false",
    	});
    }

	guardarInfo(info){
    	if(!this.infoForm.valid){
    		console.log(this.infoForm.value);
    	}

    	else{
    		let info = {
    			id: this.infoForm.value.id,
    			nombre: this.infoForm.value.nombre,
    			edad: this.infoForm.value.edad,
    			arte: this.infoForm.value.arte,
    			musica: this.infoForm.value.musica,
    			tecnologia: this.infoForm.value.tecnologia,
    			ciencias: this.infoForm.value.ciencias,
    			idiomas: this.infoForm.value.idiomas,
    			letras: this.infoForm.value.letras,
    		}
    		this.dbFirebase.guardarInfo(info).then(res=>{
        	console.log('Informacion guardada en firebase:');

        	let alert = this.alertCtrl.create({
      title: 'Registro terminado',
      message: 'Ha quedado registrado en la aplicacion',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
          this.navCtrl.push(HomePage);
          }
        }
      ]
    });
    
    alert.present();

    		})
    	}
    }


  ionViewDidLoad() {
    console.log('ionViewDidLoad InteresesPage');
  }

}
