import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {UserProfileComponent} from "./user-profile.component";
import {userRoutes} from "./userRoutes";
import {LoginComponent} from "./login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
/**
 * Created by ionut on 16-6-2017.
 */
@NgModule({
    imports :[CommonModule, FormsModule, ReactiveFormsModule,
      RouterModule.forChild(userRoutes)
    ],
    declarations:[ UserProfileComponent , LoginComponent ],
    providers:[]
})
export class UserModule{}