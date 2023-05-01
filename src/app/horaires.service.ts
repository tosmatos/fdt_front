import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs';
import { Horaires } from 'src/horaires';

@Injectable({
  providedIn: 'root'
})
export class HorairesService {

  constructor(
    private http: HttpClient,
  ) { }


  private apiUrl = 'http://localhost:8000';

  getHoraires(id: number): Observable<Horaires[]> {
    return this.http.get<Horaires[]>(this.apiUrl + `/horaires/${ id }`);
  }

  getHorairesSemaine(id: number, semaine: number): Observable<Horaires> {
    return this.http.get<Horaires>(this.apiUrl + `/horaires/${ id }/${ semaine }`)
  }
}
