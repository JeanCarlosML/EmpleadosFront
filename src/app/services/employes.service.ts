import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado.model';

@Injectable({
  providedIn: 'root',
})
export class EmployesService {
  private URI = 'https://negocioapp.herokuapp.com';
  constructor(private http: HttpClient) {}

  ListarEmployes(): Observable<any> {
    return this.http.get(`${this.URI}/empleado`);
  }
  crearEmploye(empleado: Empleado): Observable<any> {
    return this.http.post(`${this.URI}/empleado`, empleado);
  }
  editarEmploye(empleado: Empleado , id: string): Observable<any> {
    return this.http.put(`${this.URI}/empleado/${id}`, empleado);
  }
  deshabilitarEmploye(id: string): Observable<any> {
    return this.http.delete(`${this.URI}/empleado/${id}`);
  }
}
