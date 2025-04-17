import { Component, OnInit } from '@angular/core';
import { ContrattoModel } from '../../../models/dto/contratto.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ContrattoServices } from '../../../services/contratto-services.service';

@Component({
  selector: 'app-contratto-info',
  standalone: false,
  templateUrl: './contratto-info.component.html',
  styleUrl: './contratto-info.component.scss'
})
export class ContrattoInfoComponent implements OnInit {
  contratto: ContrattoModel | null = null;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private contrattoS: ContrattoServices,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.caricaDettaglio();
  }

  caricaDettaglio() {
    this.contrattoS.listById(this.id).subscribe({
      next: (res: any) => {
        if (res.rc) this.contratto = res.dati;
        else console.error(res.msg);
      },
      error: err => console.error('Errore chiamata:', err)
    });
  }



  
  eliminaLogico() {
    if (!this.contratto) return;
  
    const conferma = confirm("Sei sicuro di voler disattivare questo contratto?");
    if (!conferma) return;
  
    const contrattoID = this.contratto.contrattoID ?? this.contratto.contrattoID;
  
    this.contrattoS.delete({ contrattoID, status: 0 }).subscribe({
      next: (res: any) => {
        if (res.rc) this.router.navigate(['/employee']);
        else console.error(res.msg);
      },
      error: err => console.error('Errore disattivazione:', err)
    });
  }
  
  

  annulla() {
    this.router.navigate(['/employee']);
  }
}