import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { City } from '../models/city';
import { State } from '../models/state';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  getCity(idState: number): Observable<City[]> {
    let citys: City[] = [];
    this.http.get<State>("https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + idState).subscribe(state => {
      this.http.get<City[]>("https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + idState + "/municipios")
        .subscribe(retorno => {
          retorno.forEach(item => {
            let city: City = {
              id: item.id,
              nome: item.nome,
              uf: state
            }
            citys.push(city);
          });
        })

    });
    return of(citys);
  }

  constructor(private http: HttpClient) { }
}
