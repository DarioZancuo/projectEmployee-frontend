import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RuoloServices } from '../../../services/ruolo-services.service';
import { RuoloRequest } from '../../../models/request/ruolo-request.model';

@Component({
  selector: 'app-ruolo-create',
  standalone: false,
  templateUrl: './ruolo-create.component.html',
  styleUrls: ['./ruolo-create.component.scss']
})
export class RuoloCreateComponent {

  descrizione = '';
  stipendioMinimo = 0;

  constructor(private ruoloS: RuoloServices, private router: Router) { }

  createRuolo() {
    const body: RuoloRequest = {
      descrizione: this.descrizione,
      stipendioMinimo: this.stipendioMinimo
    };

    this.ruoloS.create(body).subscribe({
      next: (res: any) => {
        if (res.rc) {
          this.router.navigate(['/ruoli']);
        } else {
          console.error(res.msg);
        }
      },
      error: (err) => console.error('Errore creazione:', err)
    });
  }

  annulla() {
    this.router.navigate(['/ruoli']);
  }
  
}
