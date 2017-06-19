import {Component} from "@angular/core";
import {Router} from "@angular/router";
/**
 * Created by ionut on 16-6-2017.
 */
@Component({
    template : `
        <h2>this is a 404 page go back </h2>
        <button class="btn btn-primary" (click)="goBack()"> Back</button>
    `
})
export class ErrorComponent {
    constructor(private router: Router){}
    goBack(){
        this.router.navigate(['/cars']);
    }
}