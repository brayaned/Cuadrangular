import { Component, OnInit } from '@angular/core';
import { EquipoService, Equipo } from '../../SERVICES/equipo.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  ListarEquipo: Equipo[];
  ListarEquipoOrdenado: Equipo[]

  constructor( private EquipoService:EquipoService, private router:Router) { 
    this.ListarEquipo = []
    this.ListarEquipoOrdenado = []
  }

  ngOnInit(): void {
    this.listarEquipo();
    this.listarEquipoOrdenado(); 
   }

  listarEquipo(){
    this.EquipoService.getEquipos().subscribe(
      res =>{
        console.log(res)
        
        this.ListarEquipo = <any> res;
      },
      err => console.log(err)
    )
  }

  listarEquipoOrdenado(){
    this.EquipoService.getEquiposOrdenados().subscribe(
      res =>{
        console.log(res)
        this.ListarEquipoOrdenado = <any> res;
      },
      err => console.log(err)
    )
  }

}
