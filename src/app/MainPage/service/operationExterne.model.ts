import { Operation } from "./operation.model";
import { Rib } from "./rib.model";

export interface OperationExterne extends Operation {
    ribReceiver: Rib
    
}