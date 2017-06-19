import {Component, OnInit} from "@angular/core";
import {CarsService} from "../services/cars.service";
import {ActivatedRoute} from '@angular/router';
import {iCar} from "../services/iCar.model";
/**
 * Created by ionut on 16-6-2017.
 */
@Component({
    templateUrl: './src/app/car-details/car-details.component.html'
})


export class CarDetailsComponent implements OnInit{
     car: iCar;
    constructor(private carService: CarsService, private route : ActivatedRoute){}
    ngOnInit(){
        this.car =  this.carService.getSingleCar(+this.route.snapshot.params['id']);
    }
}