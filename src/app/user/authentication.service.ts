import {Injectable} from "@angular/core";
import {iUser} from "./iUser";

/**
 * Created by ionut on 17-6-2017.
 */

@Injectable()
export class AuthService{
    currentUser: iUser;
   loginUser(userName: string , password: string){
         this.currentUser={
             id: 1 ,
             firstName: "Ionut",
             lastName: "Botizan"
         };
         //add more here later
   }
   isAuthenticated(){
       return !!this.currentUser;
   }
   updateCurrentUser(firstName: string , lastName: string){
       this.currentUser.firstName = firstName;
       this.currentUser.lastName = lastName;
   }


}