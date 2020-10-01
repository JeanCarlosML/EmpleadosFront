import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployesService } from '../../services/employes.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  public form: FormGroup;
  constructor(
    private formBuild: FormBuilder,
    private employeServ: EmployesService
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
    this.employeServ.crearEmploye(this.form.value).subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit(): void {}
}
