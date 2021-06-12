import { Component, OnInit } from '@angular/core';
import { Equipo, EquipoService } from '../../SERVICES/equipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

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

  constructor(private EquipoService:EquipoService, private router:Router) { }

  ngOnInit(): void {
  }

  agregar(){
    //delete this.equipo.id;
    this.EquipoService.addEquipo(this.equipo).subscribe();
    this.router.navigate(['/inicio']);
  }

}
