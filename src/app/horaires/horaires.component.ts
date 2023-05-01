import { Component } from '@angular/core';

import { Horaires, emptyHoraires } from 'src/horaires';
import { HorairesService } from '../horaires.service';
import { empty } from 'rxjs';

@Component({
  selector: 'app-horaires',
  templateUrl: './horaires.component.html',
  styleUrls: ['./horaires.component.css']
})
export class HorairesComponent {
  constructor(
     private horairesService: HorairesService,
  ) {}

  ngOnInit(): void {
    this.getHorairesSemaine();
    this.getHoraires();
  }

  horaires: Horaires[] = [];
  horairesSemaine: Horaires = emptyHoraires();

  getHoraires(): void {
    this.horairesService.getHoraires(1)
      .subscribe( (data: Horaires[]) => this.horaires = data);
  } 

  getHorairesSemaine(): void {
    this.horairesService.getHorairesSemaine(1, 14)
      .subscribe( (data : Horaires) => this.horairesSemaine = { ...data });
  }

  refresh(): void {
    this.getHoraires();
    this.getHorairesSemaine();
  }
}
