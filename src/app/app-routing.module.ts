import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RuoloListComponent } from './pages/ruolo/ruolo-list/ruolo-list.component';
import { RuoloCreateComponent } from './pages/ruolo/ruolo-create/ruolo-create.component';
import { RuoloUpdateComponent } from './pages/ruolo/ruolo-update/ruolo-update.component';
import { CategoriaListComponent } from './pages/categoria/categoria-list/categoria-list.component';
import { CategoriaCreateComponent } from './pages/categoria/categoria-create/categoria-create.component';
import { CategoriaUpdateComponent } from './pages/categoria/categoria-update/categoria-update.component';
import { EmployeeListComponent } from './pages/employee/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './pages/employee/employee-create/employee-create.component';
import { EmployeeUpdateComponent } from './pages/employee/employee-update/employee-update.component';
import { ContrattoInfoComponent } from './pages/contratto/contratto-info/contratto-info.component';
import { ContrattoCreateComponent } from './pages/contratto/contratto-create/contratto-create.component';

const routes: Routes = [
  
  //redirect
  { path: '', redirectTo: 'employee', pathMatch: 'full' },

  //ruolo
  { path: 'ruoli', component: RuoloListComponent },
  { path: 'ruoli/create', component: RuoloCreateComponent },
  { path: 'ruoli/update/:id', component: RuoloUpdateComponent },

  //categoria
  { path: 'categorie', component: CategoriaListComponent },
  { path: 'categorie/create', component: CategoriaCreateComponent },
  { path: 'categorie/update/:id', component: CategoriaUpdateComponent },

  //employee
  { path: 'employee', component: EmployeeListComponent },
  { path: 'employee/create', component: EmployeeCreateComponent },
  { path: 'employee/update/:id', component: EmployeeUpdateComponent },

  //contratto
  { path: 'contratti/info/:id', component: ContrattoInfoComponent },
  { path: 'contratti/create/:employeeID', component: ContrattoCreateComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
