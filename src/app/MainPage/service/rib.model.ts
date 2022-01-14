import { User } from "./user.model";

export interface Rib {
    ribId: number;
    user: User;
    iban: String;
    bic: String;

}