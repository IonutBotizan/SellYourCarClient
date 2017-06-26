/**
 * Created by ionut on 25-6-2017.
 */
import {Injectable} from '@angular/core';

import {iCar, iMake, iModel, iPagedResults} from "./iCar.model";
import {Observable} from "rxjs/Observable";
import {Http , Response} from "@angular/http";
import {ConfigService} from "./config.service";
@Injectable()
export class CarsService {
    _baseUrl: string;

    constructor(private _http: Http , private _cfg : ConfigService,){
        this._baseUrl = _cfg.getApiUrl();
    }

    getMakes() : Observable<iMake[]>{
        return this._http.get(this._baseUrl + 'make')
            .map((response: Response)=>{
              return <iMake[]>response.json();
            })
            .catch(this.handleError);
    }
    getModels(makeName: string) : Observable<iModel[]>{
        let param = new URLSearchParams();
        param.set('makeName' ,makeName );
        return this._http.get(this._baseUrl+ 'make/'+ makeName+'/model', {search : param})
            .map((response: Response)=>{
              return <iModel[]>response.json();
            }).catch(this.handleError);
    }

        getCars(makeName: string , modelName: string , page: number ,pageSize:number): Observable<iPagedResults<iCar[]>>{

        return this._http.get(`${this._baseUrl}make/${makeName}/model/${modelName}/anunturi/page/${page}/${pageSize}`)
            .map((response: Response)=>{
             const totalAdds = +response.headers.get('X-Pagination');
               let cars = <iCar[]>response.json();
               return {
                 results: cars ,
                 totalAdds: totalAdds
               };
            }).catch(this.handleError);
        }


    getSingleCar(id: number): Observable<iCar> {
        return this._http.get(this._baseUrl +'anunt/'+ id)
            .map((response: Response)=>{
               return <iCar>response.json();
            })
            .catch(this.handleError);
    }
    handleError(error: Response){
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

