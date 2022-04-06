import { HttpClient, HttpHandler, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";




@Injectable({
    providedIn: 'root'
})

export class PlacesApiClient extends HttpClient {

    public baseUrl: string = 'https://api.mapbox.com/geocoding/v5/mapbox.places';

    constructor( handler: HttpHandler ){
        super(handler);
    }

    public override get<T>( url :string, options: {
        params?: HttpParams | any;
    }){

        url = this.baseUrl + url;

        return super.get<T>( url, {
            params: {
                limit: 4,
                language: 'es',
                country: 'CO',
                types: [
                    'place',
                    'address',
                    'poi'
                ],
                access_token: environment.apiKey,
                ...options.params
            }
        });

    }

}