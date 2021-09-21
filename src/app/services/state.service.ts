import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { State } from '../models/state';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  getStates(): Observable<State[]> {
    return this.http.get<State[]>("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome");
  }

  constructor(private http: HttpClient) { }
}
