import { Component ,OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {
  id:any="";

  constructor(private router:Router,private route:ActivatedRoute) {}

  ngOnInit(): void {
    //Recoger el Parametro desde el Componente anterior
    this.id = this.route.snapshot.paramMap.get("id");
    
  }
}