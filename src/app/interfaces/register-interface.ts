import { CityInterface } from "./city-interface";

export interface RegisterInterface {
    id: number;
    name: string;
    email: string;
    city:CityInterface;
    
}