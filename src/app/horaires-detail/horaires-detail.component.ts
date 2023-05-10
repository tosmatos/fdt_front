import { Component } from '@angular/core';

import { Horaires, emptyHoraires } from 'src/horaires';
import { HorairesService } from '../horaires.service';
import { DateTime } from 'ts-luxon';

@Component({
  selector: 'app-horaires-detail',
  templateUrl: './horaires-detail.component.html',
  styleUrls: ['./horaires-detail.component.css']
})
export class HorairesDetailComponent {
  constructor(
    private horairesService: HorairesService,
  ) {}

  ngOnInit():void {
    this.semaine = this.dateChoisie.weekNumber;
  }

  semaine: number = 0;
  dateChoisie: DateTime = DateTime.now();
}
