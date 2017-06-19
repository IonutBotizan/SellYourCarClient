import {Injectable} from "@angular/core";
import {CarsService} from "./cars.service";
import {ActivatedRouteSnapshot, CanActivate,  Router} from "@angular/router";
/**
 * Created by ionut on 16-6-2017.
 */

@Injectable()
export class CarsRouteActivator implements  CanActivate{
  constructor(private carsService: CarsService, private router: Router){}


  canActivate(route: ActivatedRouteSnapshot){
       const carExists =  !!this.carsService.getSingleCar(+route.params['id']);
      if(!carExists)
      {
          this.router.navigate(['/404']);
      }
      return carExists;

  }
}