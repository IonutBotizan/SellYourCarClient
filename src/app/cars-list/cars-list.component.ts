import {Component, OnInit} from "@angular/core";
import {CarsService} from "../services/cars.service";
import {ToastrService} from "../services/toastr.service";
import {ActivatedRoute} from "@angular/router";
import {iCar} from "../services/iCar.model";
/**
 * Created by ionut on 15-6-2017.
 */

@Component({
    templateUrl: './src/app/cars-list/cars-list.component.html'
})

export class CarsListComponent implements OnInit{
    cars : iCar[];
    constructor(private carsService : CarsService, private toastr : ToastrService,
                private route: ActivatedRoute){

    }
    ngOnInit(){
        /* this.carsService.getCars().subscribe(cars => {
             this.cars = cars;
         }); */
        this.cars = this.route.snapshot.data['cars'];
    }
    handleClickEvent(eventName){
           this.toastr.success(eventName);
    }
}