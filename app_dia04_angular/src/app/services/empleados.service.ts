import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private http:HttpClient) { 

  }
  getemployees():any {
    return this.http.get('http://localhost:3000/api/empleados');
  }
}
