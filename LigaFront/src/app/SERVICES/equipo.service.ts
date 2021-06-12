import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import * as internal from 'stream';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  url = '/api';
  constructor(private http: HttpClient) { }


  //get equipos
  getEquipos(){
    return this.http.get(this.url);
  }

  //get equipos ordenados
  getEquiposOrdenados(){
    return this.http.get(this.url + '/puntos');
  }

  //get un Equipo
  getUnEquipo(id:string){
    return this.http.get(this.url + '/' + id);
  }

  //agregar un equipo
  addEquipo(equipo:Equipo){
    return this.http.post(this.url, equipo);
  }

  // agregar un partido ganado
  addPartidoGanado(id:String, equipo:Equipo){
    return this.http.put(this.url + '/partido_ganado/' + id, equipo);
  }

  // agregar un partido empatado
  addPartidoEmpatado(id:String, equipo:Equipo){
    return this.http.put(this.url + '/partido_empatado/' + id, equipo);
  }

  // agregar un partido perdido
  addPartidoPerdido(id:String, equipo:Equipo){
    return this.http.put(this.url + '/partido_perdido/' + id, equipo);
  }
}



export interface Equipo{
  id: String;
  nombre: String;
  partidos_jugados:number;
  partidos_ganados:number;
  partidos_empatados:number;
  partidos_perdidos:number;
  goles_favor:number;
  goles_contra:number;
  puntos:number;
}

export interface Partido{
  id_1: string;
  id_2: string;
  goles_id_1: number;
  goles_id_2: number;
}