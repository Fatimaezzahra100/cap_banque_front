import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UtilsService {

    constructor() { }

    formatDate(date: string): string {
        let dateArray = date.substring(0, 10).split('-');
        return dateArray[2] + '-' + dateArray[1] + '-' + dateArray[0];
    }

    formatHour(date: string): string {
        return date.substring(11, 16);
    }
}
