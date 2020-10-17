import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployesService } from '../../services/employes.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  public form: FormGroup;
  public id = '';
  constructor(
    private formBuild: FormBuilder,
    private employeServ: EmployesService,
    private router: ActivatedRoute
  ) {
    this.buildForm();
  }

  private buildForm(): void {
    this.form = this.formBuild.group({
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required]],
    });
  }
  onSubmit(event: Event): void {
    event.preventDefault();
    this.obtenerId();
    if (this.id === undefined) {
      this.crearEmpleado();
    } else if (this.id !== '') {
      this.editarEmpleado();
    }
  }

  crearEmpleado(): void {
    this.employeServ.crearEmploye(this.form.value).subscribe(
      (data) => {
        if (data.ok) {
          Swal.fire({
            icon: 'success',
            title: 'Ok!',
            text: 'Registrado satisfactoriamente',
          });
        }
      },
      (error) => {
        if (error.error.error.errors.email) {
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'El correo que ingreso ya esta en uso',
          });
        } else if (error.error.error.errors.telefono) {
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Ingrese un teléfono válido',
          });
        }
      }
    );
  }

  obtenerId(): void {
    this.router.params.subscribe((data) => {
      this.id = data.id;
    });
  }

  editarEmpleado(): void {
    this.employeServ.editarEmploye(this.form.value, this.id).subscribe(
      (data) => {
        if (data.ok) {
          Swal.fire({
            icon: 'success',
            title: 'Ok!',
            text: 'Editado satisfactoriamente',
          });
        }
      },
      (error) => {
        if (error.error.error.errors.email) {
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'El correo que ingreso ya esta en uso',
          });
        } else if (error.error.error.errors.telefono) {
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Ingrese un teléfono válido',
          });
        }
      }
    );
  }
  ngOnInit(): void {}
}
