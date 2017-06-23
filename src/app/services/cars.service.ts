/**
 * Created by ionut on 22-6-2017.
 */
import {Injectable} from '@angular/core';

import {iCar} from "./iCar.model";
import {Observable} from "rxjs/Observable";
import {Http , Response} from "@angular/http";
import {ConfigService} from "./config.service";
@Injectable()
export class CarsService {
    _baseUrl: string;

    constructor(private _http: Http , private _cfg : ConfigService,){
        this._baseUrl = _cfg.getApiUrl();
    }


    getCars()  : Observable<iCar[]>{
        return this._http.get(this._baseUrl + 'make/all_makes/model/all_models/anunturi/page')
            .map((response: Response)=> {
             return  <iCar[]>response.json();
            })
            .catch(this.handleError);
    }
    getSingleCar(id: number): Observable<iCar> {
        return this._http.get(this._baseUrl +'make/all_makes/model/all_models/anunt/'+ id)
            .map((response: Response)=>{
               return <iCar>response.json();
            })
            .catch(this.handleError);
    }
    handleError(error: any){
        let appError = error.headers.get('Application-Error');
        let serverError = error.json();
        let modelStateErrors: string = '';
        if(!serverError.type){
            console.log(serverError);
            for(let idx in serverError){
                if(serverError[idx]){
                    modelStateErrors += serverError[idx] +'\n';
                }
            }
            modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;

            return Observable.throw(appError || modelStateErrors || 'Some other server error');
        }
    }
}

