import { Component, OnInit } from '@angular/core';
import { EquipoService, Equipo, Partido } from '../../SERVICES/equipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-partido',
  templateUrl: './agregar-partido.component.html',
  styleUrls: ['./agregar-partido.component.css']
})
export class AgregarPartidoComponent implements OnInit {

  equipo: Equipo = {
    id:'',
    nombre:'',
    partidos_jugados:0,
    partidos_ganados:0,
    partidos_empatados:0,
    partidos_perdidos:0,
    goles_favor:0,
    goles_contra:0,
    puntos:0
  };

  partido: Partido = {
    id_1:'',
    id_2:'',
    goles_id_1:0,
    goles_id_2:0
  }

  constructor(private EquipoService:EquipoService, private router:Router) { }

  ngOnInit(): void {
  }

  agregarPartido(){
    this.inicializarEquipo();

    if(this.partido.goles_id_1 > this.partido.goles_id_2){
      // ganador del partido -- equipo 1
      this.equipo.id = this.partido.id_1;
      this.equipo.goles_favor = this.partido.goles_id_1;
      this.equipo.goles_contra = this.partido.goles_id_2;
      this.EquipoService.addPartidoGanado(this.equipo.id, this.equipo).subscribe();

      // perdedor del partido
      this.equipo.id = this.partido.id_2;
      this.equipo.goles_favor = this.partido.goles_id_2;
      this.equipo.goles_contra = this.partido.goles_id_1;
      this.EquipoService.addPartidoPerdido(this.equipo.id, this.equipo).subscribe();      

    }else if(this.partido.goles_id_1 < this.partido.goles_id_2){
      // ganador del partido -- equipo 2
      this.equipo.id = this.partido.id_2;
      this.equipo.goles_favor = this.partido.goles_id_2;
      this.equipo.goles_contra = this.partido.goles_id_1;
      this.EquipoService.addPartidoGanado(this.equipo.id, this.equipo).subscribe();

      // perdedor del partido
      this.equipo.id = this.partido.id_1;
      this.equipo.goles_favor = this.partido.goles_id_1;
      this.equipo.goles_contra = this.partido.goles_id_2;
      this.EquipoService.addPartidoPerdido(this.equipo.id, this.equipo).subscribe();     

    }else{
      // empate 
      this.equipo.id = this.partido.id_1;
      this.equipo.goles_favor = this.partido.goles_id_1;
      this.equipo.goles_contra = this.partido.goles_id_2;
      this.EquipoService.addPartidoEmpatado(this.equipo.id, this.equipo).subscribe();     

      this.equipo.id = this.partido.id_2;
      this.equipo.goles_favor = this.partido.goles_id_2;
      this.equipo.goles_contra = this.partido.goles_id_1;
      this.EquipoService.addPartidoEmpatado(this.equipo.id, this.equipo).subscribe();     
    }
    this.router.navigate(['/inicio']);
  
  }


  inicializarEquipo(){
    this.equipo.puntos = 0;
    this.equipo.goles_favor = 0;
    this.equipo.goles_contra = 0;

  }
}


