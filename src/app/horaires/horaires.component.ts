import { Component } from '@angular/core';

import { Horaires, emptyHoraires } from 'src/horaires';
import { HorairesService } from '../horaires.service';

@Component({
  selector: 'app-horaires',
  templateUrl: './horaires.component.html',
  styleUrls: ['./horaires.component.css']
})
export class HorairesComponent {
  constructor(
    private horairesService: HorairesService,
  ) {}

  horaires: Horaires = emptyHoraires();

  getHoraires(): void {
    this.horairesService.getHoraires(1)
      .subscribe(horaires => this.horaires = horaires);
  }
}
