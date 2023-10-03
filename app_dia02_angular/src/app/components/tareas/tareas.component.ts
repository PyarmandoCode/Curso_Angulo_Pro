import { Component, ElementRef, ViewChild } from '@angular/core';

interface estructura_tareas {
  tarea: string;
  estado: string
}

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
  // nombre:string='';
  // nuevaTarea: string = '';
  // tareas: string[] = ["Tarea 1", "Tarea 2", "Tarea 3"]

  // agregarTareas(nuevaTarea: string) {
  //   this.tareas.push(nuevaTarea);
  //   //console.log(this.tareas.push)
  // }
  mistareas: estructura_tareas[] = [];

  //Acceder a elementos del DOM
  @ViewChild('todo') todo!: ElementRef;

  addtodo(value: string):void {
    var info: estructura_tareas = { tarea: value, estado: 'nocompletado' }
    if (value !== "") {
      this.mistareas.push(info);
      //Limpiar el Valor de la Caja de Texto
      this.todo.nativeElement.value = "";
    }
    else {
      alert("Debe Ingresar una Tarea");
    }

  }

  deleteitem(value: string):void {
    for (let i = 0; i <= this.mistareas.length; i++) {
      if (value == this.mistareas[i].tarea) {
        this.mistareas.splice(i, 1)
      }
    }
  }

  completeitem(value:string):void {
    for (let i = 0; i <= this.mistareas.length; i++) {
      if (value == this.mistareas[i].tarea) {
        this.mistareas[i].estado="completado"
      }
    }

  }


  constructor() {

  }

}
