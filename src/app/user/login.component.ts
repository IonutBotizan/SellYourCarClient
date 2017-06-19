import {Component} from "@angular/core";
import {AuthService} from "./authentication.service";
import {Router} from "@angular/router";
/**
 * Created by ionut on 16-6-2017.
 */
@Component({
    templateUrl: './src/app/user/login.component.html',
    styles:[`
        em { float:right; color:#E05C65; padding-left:10px; }
    `]
})

export class LoginComponent{

    constructor(private authService: AuthService, private router: Router){

    }



    login(formValues){
        this.authService.loginUser(formValues.userName , formValues.password);
        this.router.navigate(['/cars']);
    }
    cancel(){
        this.router.navigate(['/cars']);

    }


}