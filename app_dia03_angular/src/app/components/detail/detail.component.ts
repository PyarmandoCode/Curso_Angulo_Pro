import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id: any = "";

  ArregloTarjetas: any[] = [];

  public image: string = "https://cdn.worldvectorlogo.com/logos/angular-icon.svg";

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");//Recogiendo el Parametro
    this.getCursoId(this.id); //Pasado a la funcion
    console.log(this.ArregloTarjetas)


  }

  getCursoId(id: string) {
    const cursos = [
      { codigo: '100', curso: 'Flask', precio: 700, imagen: "https://res.cloudinary.com/dream-music/image/upload/v1639002895/elearning/3_qu9zdm.png", vacantes: "20", categoria: "1", detalles: "es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló" },
      { codigo: '200', curso: 'Django', precio: 900, imagen: "https://res.cloudinary.com/dream-music/image/upload/v1639002895/elearning/2_vnzejt.png", vacantes: "10", categoria: "1", detalles: "es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló" },
      { codigo: '300', curso: 'Big-Data', precio: 1250, imagen: "https://res.cloudinary.com/dream-music/image/upload/v1639002895/elearning/bigdata_mqqp7q.png", vacantes: "30", categoria: "2", detalles: "es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló" },
      { codigo: '400', curso: 'Microservicios', precio: 850, imagen: "https://res.cloudinary.com/dream-music/image/upload/v1639002891/elearning/5_ipew0n.png", vacantes: "40", categoria: "2", detalles: "es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló" },
    ]

    const result = cursos.find(e => e.codigo === id);
    this.ArregloTarjetas.push(result); //Generando un nuevo array
    return this.ArregloTarjetas;


  }

  irpaginainicio(): void {
    this.router.navigate(['/inicio'])

  }
}
