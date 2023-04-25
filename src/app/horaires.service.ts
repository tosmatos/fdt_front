import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Horaires } from 'src/horaires';

@Injectable({
  providedIn: 'root'
})
export class HorairesService {

  constructor(
    private http: HttpClient,
  ) { }

  private apiUrl = 'localhost:8000';

  getHoraires(id: number): Observable<Horaires> {
    return this.http.get<Horaires>(this.apiUrl + '/horaires/1');
  }
}
