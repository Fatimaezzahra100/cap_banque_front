import { User } from "./user.model";

export interface Compte {
    compteId: number;
    user: User;
    accountNumber: number;
    balance: number;
    creationDate: Date;
    
}