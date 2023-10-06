import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from './services/empleados.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  empleadosList: any[] = [];

  constructor(private empleadosService: EmpleadosService) { }

  ngOnInit(): void {
    //El METODO subscribe se utiliza para observar y reaccionar a cambios en un observable
    this.empleadosService.getemployees()
      .subscribe((response: any[]) => this.empleadosList = response);

  }

}
