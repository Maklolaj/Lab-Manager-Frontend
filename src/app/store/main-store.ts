import { BaseStore, Trackable } from './base-store';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class MainStore extends BaseStore {
    @Trackable() testValue:boolean = false;

    @Trackable() testList:string[] =[];
}