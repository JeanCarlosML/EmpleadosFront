import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { AboutComponent } from './components/about/about.component';
import { ListaComponent } from './components/lista/lista.component';

const routes: Routes = [
  { path: '', component: RegistroComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'lista', component: ListaComponent },
  { path: 'extras', component: AboutComponent },
  { path: '**', redirectTo: 'registro', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
