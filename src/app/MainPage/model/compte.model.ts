import { User } from "./user.model";

export interface Compte {
    compteId : number
    user : User,
    accountNumber : number,
    balance : number,
    creationDate : Date,
    overdraft : number
}

export interface CompteCourant {
    compteId : number
    user : User,
    accountNumber : number,
    balance : number,
    creationDate : Date,
    overdraft : number
}

export interface CompteEpargne {
    compteId : number
    user : User,
    accountNumber : number,
    balance : number,
    creationDate : Date,
    rate : number
}

