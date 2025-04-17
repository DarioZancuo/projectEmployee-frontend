import { Component, OnInit } from '@angular/core';
import { RuoloServices } from '../../../services/ruolo-services.service';
import { RuoloModel } from '../../../models/dto/ruolo.model';
import { Router } from '@angular/router';
import { CONSTANTS } from '../../../shared/constants';

@Component({
  selector: 'app-ruolo-list',
  standalone: false,
  templateUrl: './ruolo-list.component.html',
  styleUrls: ['./ruolo-list.component.scss']
})
export class RuoloListComponent implements OnInit {

  listaRuoli: RuoloModel[] = [];

  constructor(private ruoloS: RuoloServices, private router: Router) { }

  ngOnInit(): void {
    this.caricaLista();
  }

  caricaLista() {
    this.ruoloS.listAll().subscribe({
      next: (res: any) => {
        if(res.rc) {
          this.listaRuoli = res.dati;
        } else {
          console.error(res.msg);
        }
      },
      error: (err: any) => {
        console.error('Errore chiamata: ', err);
      }     
    });
  }

  vaiACrea() {
    this.router.navigate(['/ruoli/create']);
  }

  modificaRuolo(id: number) {
    this.router.navigate(['/ruoli/update', id]);
  }

  eliminaRuolo(id: number) {
    if (confirm('Sei sicuro di voler eliminare questo ruolo?')) {
      this.ruoloS.delete({ ruoloID: id }).subscribe({
        next: (res: any) => {
          if (res.rc) this.caricaLista();
          else console.error(res.msg);
        },
        error: (err) => console.error('Errore delete:', err)
      });
    }
  }

}