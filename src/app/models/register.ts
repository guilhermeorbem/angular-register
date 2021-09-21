import { CityInterface } from "../interfaces/city-interface";
import { RegisterInterface } from "../interfaces/register-interface";
export class Register implements RegisterInterface {
    id: number = 0;
    name: string = '';
    email: string = '';
    city: CityInterface = {
        id: 0,
        nome: '',
        uf: {
            id: 0,
            nome: '',
            sigla: ''
        }
    };

    constructor() {

    }
   

}
