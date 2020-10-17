import { Component, OnInit } from '@angular/core';
import { EmployesService } from '../../services/employes.service';
import { Empleado } from '../../models/empleado.model';
import { Observable } from 'rxjs';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  public spiner = faSpinner;
  public cargado = true;
  public empleados: Array<Empleado>;
  public empleados$: Observable<any>;
  constructor(private employeServ: EmployesService, private router: Router) {}

  ngOnInit(): void {
    this.listarEmpleados();
  }
  deshabilitarEmpleado(empleado: Empleado): void {
    this.empleados$ = this.employeServ.deshabilitarEmploye(empleado._id);
    this.empleados$.subscribe((data) => {
      this.cargado = true;
      this.listarEmpleados();
    });
  }
  listarEmpleados(): void {
    this.empleados$ = this.employeServ.ListarEmployes();
    this.empleados$.subscribe((data) => {
      this.empleados = data.empleados;
      this.cargado = false;
    });
  }
  editarEmpleado(empleado: Empleado): void {
    this.router.navigate([`registro/${empleado._id}`]);
  }
}
