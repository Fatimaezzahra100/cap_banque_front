import { Compte } from "./compte.model";
import { Operation } from "./operation.model";

export interface OperationInterne extends Operation {
    compteReceiver?: Compte;
    
}


