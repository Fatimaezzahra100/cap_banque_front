import { Frequence } from "./frequence.model";
import { Compte } from "./compte.model";
import { Rib } from "./rib.model";

export interface Operation {
    operationId:number;
    amount: number;
    compteSender: Compte;
    operationDate: Date;
    frequence: Frequence;
    ribReceiver?: Rib,
    compteReceiver?: Compte;
    
}