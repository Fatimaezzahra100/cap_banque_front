import { Compte } from "./compte.model";
import { Operation } from "./operation.model";

export interface User {
    userId: number;
    userName: String;
    lastName: String;
    firstName: String;
    email: String;
    address: String;
    comptesEpargne?: Compte[];
    compteCourantId: number;
    ribId: number;
    tel: number;
    operations?: Operation[];
}