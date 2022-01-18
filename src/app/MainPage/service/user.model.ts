import { Compte } from "./compte.model";
import { Operation } from "./operation.model";

export interface User {
    userId: number ;
    userName: String;
    lastName: String;
    firstName: String;
    passeWord: String;
    email: String;
    address: String;
    tel: number;
    comptesEpargne?: Compte[];
    compteCourantId: number;
    ribId: number;
    operations?: Operation[];
}