import { Component, OnInit } from '@angular/core';
import { CategoriaRequest } from '../../../models/request/categoria-request.model';
import { CategoriaServices } from '../../../services/categoria-services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoria-update',
  standalone: false,
  templateUrl: './categoria-update.component.html',
  styleUrl: './categoria-update.component.scss'
})
export class CategoriaUpdateComponent implements OnInit {

  categoriaID: number = 0;
  tipo: string = '';

  constructor(
    private route: ActivatedRoute,
    private categoriaService: CategoriaServices,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.categoriaID = this.route.snapshot.params['id'];
    this.caricaCategoria();
  }

  caricaCategoria() {
    this.categoriaService.listById(this.categoriaID).subscribe({
      next: (res: any) => {
        if (res.rc) {
          this.tipo = res.dati.tipo;
        } else {
          console.error(res.msg);
        }
      },
      error: (err) => console.error('Errore caricamento:', err)
    });
  }

  updateCategoria() {
    const body: CategoriaRequest = {
      categoriaID: this.categoriaID,
      tipo: this.tipo
    };

    this.categoriaService.update(body).subscribe({
      next: (res: any) => {
        if (res.rc) {
          this.router.navigate(['/categorie']);
        } else {
          console.error(res.msg);
        }
      },
      error: (err) => console.error('Errore aggiornamento:', err)
    });
  }
}
