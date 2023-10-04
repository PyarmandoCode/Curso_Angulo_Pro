import { Component , OnInit } from '@angular/core';

//Estructura que tomara el Array

interface Tarjeta {
  curso:string;
  precio:number;
  imagen:string;
  vacantes:string;
  categoria:string;
  estado?:boolean;//No es Mandatorio
}

@Component({
  selector: 'app-sliderbar',
  templateUrl: './sliderbar.component.html',
  styleUrls: ['./sliderbar.component.css']
})
export class SliderbarComponent implements OnInit{

  public ArregloTarjetas:Tarjeta[]=[];

  constructor() {

  }
  ngOnInit(): void {
    this.ArregloTarjetas = [
      {curso:'Flask',precio:700,imagen:"https://res.cloudinary.com/dream-music/image/upload/v1639002895/elearning/3_qu9zdm.png",vacantes:"20",categoria:"1"},
      {curso:'Django',precio:900,imagen:"https://res.cloudinary.com/dream-music/image/upload/v1639002895/elearning/2_vnzejt.png",vacantes:"10",categoria:"1"},
      {curso:'Big-Data',precio:1250,imagen:"https://res.cloudinary.com/dream-music/image/upload/v1639002895/elearning/bigdata_mqqp7q.png",vacantes:"30",categoria:"2"},
      {curso:'Microservicios',precio:850,imagen:"https://res.cloudinary.com/dream-music/image/upload/v1639002891/elearning/5_ipew0n.png",vacantes:"40",categoria:"2"},
    ]
  }

}
