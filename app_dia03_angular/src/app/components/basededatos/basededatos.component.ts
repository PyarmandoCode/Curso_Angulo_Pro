import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-basededatos',
  templateUrl: './basededatos.component.html',
  styleUrls: ['./basededatos.component.css']
})
export class BasededatosComponent implements OnInit {

  constructor () {}

  ngOnInit(): void {

    
  }

  listadoEstudiantes:any[] = [
    {nombre:"Jose Fernandez",estado:"Promocionado"},
    {nombre:"Carlos Espinoza",estado:"Regular"},
    {nombre:"Manuel Perez",estado:"Regular"},
    {nombre:"Oscar Ruiz",estado:"Recursante"},
    {nombre:"Maria Davila",estado:"Recursante"},
    {nombre:"Josefina Lopez",estado:"SinInformacion"},
  ]

}
