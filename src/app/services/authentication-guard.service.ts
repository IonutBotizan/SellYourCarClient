import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
/**
 * Created by ionut on 30-6-2017.
 */

@Injectable()
export class AuthenticationGuardService implements CanActivate{
    constructor(private router: Router){
    }

    canActivate(){
        if(sessionStorage.getItem('currentUser')){
            return true;
        }
        this.router.navigate(['user/login']);
        return false;
    }
}
