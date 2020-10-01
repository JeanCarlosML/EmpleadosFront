import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployesService {
  private URI = 'https://negocioapp.herokuapp.com';
  constructor(private http: HttpClient) {}

  ListarEmployes(): Observable<any> {
    return this.http.get(`${this.URI}/empleado`);
  }
  crearEmploye(body): Observable<any> {
    return this.http.post(`${this.URI}/empleado`, body);
  }
}
