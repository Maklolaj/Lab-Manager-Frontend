
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class BaseStore {
    ready: boolean = false;

    private _changes$: ReplaySubject<ChangesMap> = new ReplaySubject<ChangesMap>(1);
    changes$: Observable<ChangesMap> = this._changes$.asObservable();

    private _ready$: ReplaySubject<true> = new ReplaySubject<true>(1);
    ready$: Observable<boolean> = this._ready$.asObservable();

    private _changes: ChangesMap = {};
    private _properties: { [key: string]: any } = {};

    changesOf(field: keyof this): Observable<unknown>;
    changesOf(...fields: Array<keyof this>): Observable<unknown[]>;
    changesOf(...fields: Array<keyof this>): Observable<unknown | unknown[]> {
        return this.changes$.pipe(
            map((changesMap: ChangesMap) => {
                return fields.map((field) =>
                    changesMap[field as string] ? changesMap[field as string].value : this[field]
                );
            }),
            filter(distinctValues()),
            map((values: string[]) => (values.length > 1 ? values : values[0]))
        );
    }

    commit(): void {
        if (this._changes && Object.keys(this._changes).length > 0) {
            const currentChanges: ChangesMap = this._changes;
            this._changes = {};
            this._changes$.next(currentChanges);
        }
        if (!this.ready) {
            this.ready = true;
            this._ready$.next(true);
        }
    }
}

export interface ChangesMap {
    [filedName: string]: PropertyChange;
}

function distinctValues() {
    let lastValues: any[];

    return function filterValues(values:any): boolean {
        const oldValues = lastValues;
        lastValues = [].concat(values);

        if (!oldValues || oldValues.length !== values.length) {
            return true;
        }
        const same: boolean = oldValues.every((v, i) => v === values[i]);
        return !same;
    };
}

export function Trackable() {
    return function TrackableDecorator(target: any, propertyKey: string | symbol) {
        Object.defineProperty(target, propertyKey, {
            get() {
                return this._properties && this._properties[propertyKey];
            },
            set(value: any) {
                if (!this._properties) {
                    this._properties = {};
                }
                const oldValue = this._properties[propertyKey];
                if (oldValue !== value) {
                    if (!this._changes) {
                        this._changes = {};
                    }
                    this._properties[propertyKey] = value;
                    this._changes[propertyKey] = {
                        key: propertyKey,
                        value,
                        oldValue,
                    };
                }
            },
        });
    };
}

export interface PropertyChange {
    key: string;
    value: any;
    oldValue: any;
}