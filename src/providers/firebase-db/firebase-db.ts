import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase} from 'angularfire2/database';
import { AuthService } from '../auth-service';

/*
  Generated class for the FirebaseDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseDbProvider {

  constructor(public afDB: AngularFireDatabase, public auth: AuthService) {
    console.log('Hello FirebaseDbProvider Provider');
  }
  guardarEvento(evento){
    if(!evento.id){
      evento.id  = Date.now();
    }
    return this.afDB.database.ref('Evaluar/'+evento.categoria+'/'+evento.id+'/').set(evento) 
  }

  guardarEventoUsuario(evento){
    if(!evento.id){
      evento.id  = Date.now();
    }
    return this.afDB.database.ref('Usuario/'+this.auth.getUser()+'/eventos/'+evento.id+'/').set(evento) 
  }

  public eliminarEventoUsuario(id){
    this.afDB.database.ref('Usuario/'+this.auth.getUser()+'/eventos/'+id+'/').remove();
  }

  public infoUsuario(){
    return this.afDB.list('Usuario/'+this.auth.getUser()+'/').valueChanges();
  }


  guardarInfo(info){
     return this.afDB.database.ref('Usuario/'+this.auth.getUser()+'/').set(info) 
     }

  getArte(){
    return this.afDB.list('Evento/'+'Arte/').valueChanges();
  }

  getMusica(){
    return this.afDB.list('Evento/'+'Música/').valueChanges();
  }

  getTecnologia(){
    return this.afDB.list('Evento/'+'Tecnología/').valueChanges();
  }

  getCiencias(){
    return this.afDB.list('Evento/'+'Ciencias Exactas/').valueChanges();
  }

  getIdiomas(){
    return this.afDB.list('Evento/'+'Idiomas/').valueChanges();
  }

  getLetras(){
    return this.afDB.list('Evento/'+'Letras/').valueChanges();
  }

  getMiseventos(){
    return this.afDB.list('Usuario/'+this.auth.getUser()+'/eventos/').valueChanges();
  }

  getMusicaus(){
    return this.afDB.list('Evento/'+'Música/').valueChanges();
  }

  getTecnologiaus(){
    return this.afDB.list('Evento/'+'Tecnología/').valueChanges();
  }

  getCienciasus(){
    return this.afDB.list('Evento/'+'Ciencias Exactas/').valueChanges();
  }

  getIdiomasus(){
    return this.afDB.list('Evento/'+'Idiomas/').valueChanges();
  }

  getLetrasus(){
    return this.afDB.list('Evento/'+'Letras/').valueChanges();
  }

  getArtepm(usuario){
    if(usuario.arte = "true"){
      return this.afDB.list('Evento/'+'Arte/').valueChanges(); 
    }
  }

  getMusicapm(usuario){
    if(usuario.musica = "true"){
      return this.afDB.list('Evento/'+'Música/').valueChanges(); 
    }
  }

  getTecnologiapm(usuario){
    if(usuario.tecnologia = "true"){
      return this.afDB.list('Evento/'+'Tecnología/').valueChanges(); 
    }
  }

  getCienciaspm(usuario){
    if(usuario.ciencias = "true"){
      return this.afDB.list('Evento/'+'Ciencias Exactas/').valueChanges(); 
    }
  }

  getIdiomaspm(usuario){
    if(usuario.idiomas = "true"){
      return this.afDB.list('Evento/'+'Idiomas/').valueChanges(); 
    }
  }

  getLetraspm(usuario){
    if(usuario.letras = "true"){
      return this.afDB.list('Evento/'+'Letras/').valueChanges(); 
    }
  }

}
