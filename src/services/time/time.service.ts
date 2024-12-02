import { Injectable } from '@angular/core';
import { BaseService } from '../base-service';
import { DateTime, DateTimeFormatOptions } from 'luxon';

export type DateTimeFormat = string | number | Date | number | DateTime | object;

@Injectable({
    providedIn: 'root'
})
export class TimeService extends BaseService {

    formatDateVerbose(date: DateTimeFormat): string {
        return this.format(date, 'DDDD');
    }

    format(date: DateTimeFormat, format: string, options?: DateTimeFormatOptions): string {
        return this.getDateTime(date).toFormat(format, options);
    }

    getDateTime(date: DateTimeFormat): DateTime {

        if (date instanceof DateTime) {
            return date;
        }

        if (typeof date === 'string') {
            return DateTime.fromISO(date);
        }

        if (typeof date === 'number') {
            return DateTime.fromMillis(date);
        }

        if (date instanceof Date) {
            return DateTime.fromJSDate(date);
        }

        if (typeof date === 'object') {
            return DateTime.fromObject({ ...date});
        }

        throw Error(`Cannot parse date to Luxon DateTime. Value to be parsed is: ${date}`);
    }
}
