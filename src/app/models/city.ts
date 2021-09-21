import { CityInterface } from "../interfaces/city-interface";
import { StateInterface } from "../interfaces/state-interface";

import { State } from "./state";

export class City implements CityInterface {
    id: number=0;
    nome: string='';
    uf: State = {id:0,nome:'',sigla:''}; 
}
