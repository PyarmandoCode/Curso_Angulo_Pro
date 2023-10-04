import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public image:string="https://cdn.worldvectorlogo.com/logos/angular-icon.svg";
  public titulo:string="Bienvenido a mi Sitio Web de Cursos";

  constructor(){}

  ngOnInit(): void {
    
  }

}
