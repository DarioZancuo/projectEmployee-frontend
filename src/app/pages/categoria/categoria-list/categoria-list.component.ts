import { Component, OnInit } from '@angular/core';
import { CategoriaServices } from '../../../services/categoria-services.service';
import { Router } from '@angular/router';
import { CategoriaModel } from '../../../models/dto/categoria.model';

@Component({
  selector: 'app-categoria-list',
  standalone: false,
  templateUrl: './categoria-list.component.html',
  styleUrl: './categoria-list.component.scss'
})
export class CategoriaListComponent implements OnInit {

  listaCategorie: CategoriaModel[] = [];

  constructor(private categoriaS: CategoriaServices, private router: Router) {}

  ngOnInit(): void {
    this.caricaLista();
  }

  caricaLista() {
    this.categoriaS.listAll().subscribe({
      next: (res: any) => {
        if (res.rc) {
          this.listaCategorie = res.dati;
        } else {
          console.error(res.msg);
        }
      },
      error: err => console.error('Errore chiamata:', err)
    });
  }

  vaiACrea() {
    this.router.navigate(['/categorie/create']);
  }

  modificaCategoria(id: number) {
    this.router.navigate(['/categorie/update', id]);
  }

  eliminaCategoria(id: number) {
    if (confirm('Sei sicuro di voler eliminare questa categoria?')) {
      this.categoriaS.delete({ categoriaID: id }).subscribe({
        next: (res: any) => {
          if (res.rc) this.caricaLista();
          else console.error(res.msg);
        },
        error: err => console.error('Errore delete:', err)
      });
    }
  }
}
