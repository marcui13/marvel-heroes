import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpOptions } from '@capacitor/core';
import { Observable, from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Heroe } from '../@models/heroe.interface';
import { environment } from 'src/environments/enviroment';
import * as crypto from 'crypto-js';

@Injectable({
    providedIn: 'root'
})
export class MarvelApiService {
    constructor() {}
    
    /**************************************/
    /**********createAuthURL***************/
    /**************************************/
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

    /**************************************/
    /**********fetchHeroes*****************/
    /**************************************/
    getHeroes(): Observable<Heroe[]> {
        const url = this.createAuthURL();
        const options: HttpOptions = {
            url: url,
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return from(CapacitorHttp.get(options)).pipe(
            map(response => response.data.data.results as Heroe[]),
            catchError((error) => {
                console.error('Error al obtener héroes:', error);
                throw error;
            })
        );
    }
}
