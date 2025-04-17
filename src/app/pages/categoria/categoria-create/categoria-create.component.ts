import { Component } from '@angular/core';
import { CategoriaServices } from '../../../services/categoria-services.service';
import { Router } from '@angular/router';
import { CategoriaRequest } from '../../../models/request/categoria-request.model';

@Component({
  selector: 'app-categoria-create',
  standalone: false,
  templateUrl: './categoria-create.component.html',
  styleUrl: './categoria-create.component.scss'
})
export class CategoriaCreateComponent {
  tipo = '';

  constructor(private categoriaS: CategoriaServices, public router: Router) {}

  createCategoria() {
    const body: CategoriaRequest = {
      categoriaID: 0,
      tipo: this.tipo
    };

    this.categoriaS.create(body).subscribe({
      next: (res: any) => {
        if (res.rc) this.router.navigate(['/categorie']);
        else console.error(res.msg);
      },
      error: err => console.error('Errore creazione:', err)
    });
  }
}
