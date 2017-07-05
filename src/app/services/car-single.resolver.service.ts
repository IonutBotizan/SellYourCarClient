/**
 * Created by ionut on 30-6-2017.
 */
import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot } from '@angular/router'
import {CarsService} from "./cars.service";


@Injectable()
export class CarSingleResolverService implements Resolve<any> {
    constructor(private carService:CarsService) {}
    resolve(route: ActivatedRouteSnapshot) {
        return this.carService.getSingleCar(route.params['id']);
    }
}
