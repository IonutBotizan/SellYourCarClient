import {Injectable} from "@angular/core";
import {Resolve} from '@angular/router';
import {CarsService} from "./cars.service";
/**
 * Created by ionut on 16-6-2017.
 */

@Injectable()
export class CarsListResolverService implements Resolve<any>{
    constructor(private carsService: CarsService){}

    resolve(){
        return this.carsService.getCars().map(cars=> cars);
    }
}