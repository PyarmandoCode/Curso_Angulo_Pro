import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public image: string = "https://cdn.worldvectorlogo.com/logos/angular-icon.svg";

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

  irpaginainicio(): void {
    this.router.navigate(['/inicio'])

  }
}
