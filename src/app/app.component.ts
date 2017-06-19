/**
 * Created by ionut on 15-6-2017.
 */
import { Component, ViewContainerRef } from '@angular/core';
// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';
import {AuthService} from "./user/authentication.service";

@Component({
    selector: 'scheduler',
    templateUrl: './src/app/app.component.html'
})
export class AppComponent {

    constructor(private viewContainerRef: ViewContainerRef, private auth: AuthService) {
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;
    }
}