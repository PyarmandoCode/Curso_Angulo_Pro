import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public imagelogo:string="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-5-2.png";

  constructor() {}

  ngOnInit(): void {
    
  }

}
