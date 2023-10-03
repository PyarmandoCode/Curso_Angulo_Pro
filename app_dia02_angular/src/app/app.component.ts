import { Component } from '@angular/core';

//Tipo de Objeto personalizado
interface Producto {
  nombre: string;
  precio: number;

}

//ENUM
enum Direccion {
  Norte,
  Sur,
  Este,
  Oeste
}

@Component({
  selector: 'app-root',
  // template:`<h1>{{ numero }}</h1>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dia Dos en Angular-Vamos Por TI TYPESCRIPT';
  //Tipo de datos String
  texto: string = 'Dia Dos en Angular-Vamos Por TI TYPESCRIPT';
  //Tipo de datos Numerico
  numero: number = 42;
  precio: number = 6.20;
  nuevo_precio: number = this.precio + 23;
  //Tipo de datos Boolean
  estado: boolean = true;

  //Variables cuyo tipo desconocemos
  resul: any = 'la compilacion fue correcta';
  //Array
  list: number[] = [1, 2, 3];
  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4']
  //POO
  temario: any = {
    curso: 'Angular',
    version: 'type 16',
    interfaz: 'Angular Cli'
  }

  estilos = {
    'font-size': '20px',
    'color': 'blue',
    'border': '1px solid red'
  }

  //Objeto que utiliza la Interfaz Personalizada
  producto: Producto = {
    nombre: 'PRODUCTO1',
    precio: 50
  }

  //Creando Una Funcion
  sumar(a: number, b: number): number {
    return a + b
  }

  direccionActual:Direccion=Direccion.Sur;

  //Manejo de Fechas

  fechaActual : Date = new Date();

  //Metodos Void No devuelve ningun Valor

  mensaje : string='';

  onBottonClic():void {
    this.mensaje="El Boton fue Clickeado"
  }

}



