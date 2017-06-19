import {Component, Input} from "@angular/core";
import {iCar} from "../services/iCar.model";
/**
 * Created by ionut on 15-6-2017.
 */

@Component({
    selector : 'car-thumbnail',
    templateUrl : './src/app/cars-list/car-thumbnail.component.html'
})

export class CarThumbnailComponent {
    @Input() car: iCar;
}