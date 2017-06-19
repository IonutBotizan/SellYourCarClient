import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {CarsService} from "../services/cars.service";
/**
 * Created by ionut on 16-6-2017.
 */

@Component({
    templateUrl :"./src/app/new-car/new-car.component.html",
    styles: [`
        em {float:right; color:#E05C65; padding-left:10px;}
        .error input {background-color:#E3C3C5;}
        .error ::-webkit-input-placeholder { color: #999; }
        .error :-moz-placeholder { color: #999; }
        .error ::-moz-placeholder {color: #999; }
        .error :ms-input-placeholder { color: #999; }
    `]
})

export class NewCarComponent{
    isDirty: boolean=true;
    constructor(private router: Router, private carService: CarsService){}


    cancelCreate()
    {
        this.router.navigate(['/cars']);
    }
}