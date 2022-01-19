import { Frequence } from "./frequence.model";
import { Compte } from "./compte.model";
import { Rib } from "./rib.model";

export interface Operation {
    operationId:number;
    amount: number;
    compteSenderId: number;
    operationDate: Date;
    frequence: Frequence;
    ribReceiver?: Rib,
    compteReceiverId?: number;
    userSender: String;
    userReceiver: String;
    
    
}