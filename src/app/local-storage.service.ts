import { Injectable } from '@angular/core';
import { LocalStorageKey } from './enum';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }


    saveLocalStorage(key :LocalStorageKey  , value : string){

        localStorage.setItem(key , value);

    }

     loadLocalStorage(key :LocalStorageKey): string {   
       return localStorage.getItem(key);
    }

    removeItemLocalStorage(key : LocalStorageKey){
        localStorage.removeItem(key);
    }

    clearLocalStorage(){
      localStorage.clear();
    }

}
