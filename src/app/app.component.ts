/**
 * Created by ionut on 15-6-2017.
 */
import {Component, OnInit, ViewContainerRef} from '@angular/core';
import './rxjs-operators';
import {AuthService} from "./user/authentication.service";

@Component({
    selector: 'scheduler',
    templateUrl: './src/app/app.component.html'
})
export class AppComponent implements OnInit{

    constructor(private viewContainerRef: ViewContainerRef, private auth: AuthService) {
        this.viewContainerRef = viewContainerRef;
        console.log('Is currentUSer in authcontoller  '+this.auth.currentUser);

    }
     ngOnInit(){
         console.log("Session storage : in onInit "+ sessionStorage.getItem("currentUser"));
         if(sessionStorage.getItem("currentUser")!==null)
             this.auth.currentUser =JSON.parse(sessionStorage.getItem('currentUser'));

     }

    logout(){
        sessionStorage.removeItem('currentUser');
        this.auth.currentUser = undefined;
        console.log('Is currentUSer  '+this.auth.currentUser);

    }
}
