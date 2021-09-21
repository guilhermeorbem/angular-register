import { StateInterface } from "../interfaces/state-interface";

export class State implements StateInterface{
    id: number=0;
    sigla: string='';
    nome: string='';
}
