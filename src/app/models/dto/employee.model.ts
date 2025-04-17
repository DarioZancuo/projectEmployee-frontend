import { ContrattoModel } from "./contratto.model";

export interface EmployeeModel {

    id: number;
    fullname: string;
    email: string;
    country: string;  
    address: string;  
    gender: string;
    hobbies: string;
    contrattoID?: ContrattoModel | null;
}
