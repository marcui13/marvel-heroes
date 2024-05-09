// IONIC ANGULAR
import { Injectable } from '@angular/core';
// CAPACITOR
import { CapacitorHttp, HttpOptions } from '@capacitor/core';
// LIBRARIES
import { Observable, from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import * as crypto from 'crypto-js';
// INTERFACES
import { Hero } from '../@models/hero.interface';
// ENVIROMENT
import { environment } from 'src/environments/enviroment';

@Injectable({
    providedIn: 'root'
})
export class MarvelApiService {
    constructor() {}
    
    private createAuthURL(): string {
        const ts = Date.now().toString();
        const hash = crypto.MD5(ts + environment.marvelApiPrivateKey + environment.marvelApiPublicKey).toString();
        const params = new URLSearchParams({
            ts: ts,
            apikey: environment.marvelApiPublicKey,
            hash: hash
        });
        const url = `${environment.marvelApiBaseUrl}/characters?${params.toString()}`;
        return url;
    }

    getHeroes(): Observable<Hero[]> {
        const url = this.createAuthURL();
        const options: HttpOptions = {
            url: url,
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return from(CapacitorHttp.get(options)).pipe(
            map(response => response.data.data.results as Hero[]),
            catchError((error) => {
                console.error('Error al obtener héroes:', error);
                throw error;
            })
        );
    }

    getHeroById(heroId: number): Observable<Hero> {
        const ts = Date.now().toString();
        const hash = crypto.MD5(ts + environment.marvelApiPrivateKey + environment.marvelApiPublicKey).toString();
        const params = new URLSearchParams({
            ts: ts,
            apikey: environment.marvelApiPublicKey,
            hash: hash
        });
        const url = `${environment.marvelApiBaseUrl}/characters/${heroId}?${params.toString()}`;
        const options: HttpOptions = {
            url: url,
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return from(CapacitorHttp.get(options)).pipe(
            map(response => response.data.data.results[0] as Hero)
        );
    }
}
