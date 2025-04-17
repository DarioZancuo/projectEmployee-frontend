import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RuoloListComponent } from './pages/ruolo/ruolo-list/ruolo-list.component';
import { RuoloCreateComponent } from './pages/ruolo/ruolo-create/ruolo-create.component';
import { RuoloUpdateComponent } from './pages/ruolo/ruolo-update/ruolo-update.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { CategoriaListComponent } from './pages/categoria/categoria-list/categoria-list.component';
import { CategoriaUpdateComponent } from './pages/categoria/categoria-update/categoria-update.component';
import { CategoriaCreateComponent } from './pages/categoria/categoria-create/categoria-create.component';
import { EmployeeListComponent } from './pages/employee/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './pages/employee/employee-create/employee-create.component';
import { EmployeeUpdateComponent } from './pages/employee/employee-update/employee-update.component';
import { ContrattoInfoComponent } from './pages/contratto/contratto-info/contratto-info.component';
import { ContrattoCreateComponent } from './pages/contratto/contratto-create/contratto-create.component';

@NgModule({
  declarations: [
    AppComponent,          
    RuoloListComponent, 
    RuoloCreateComponent, 
    RuoloUpdateComponent,
    NavbarComponent,
    CategoriaListComponent,
    CategoriaUpdateComponent,
    CategoriaCreateComponent,
    EmployeeListComponent,
    EmployeeCreateComponent,
    EmployeeUpdateComponent,
    ContrattoInfoComponent,
    ContrattoCreateComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]   
})
export class AppModule { }
