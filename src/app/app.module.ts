/**
 * Created by ionut on 15-6-2017.
 */
import './rxjs-operators';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { SlimLoadingBarService, SlimLoadingBarComponent } from 'ng2-slim-loading-bar';
import {
    CarsListComponent,
    CarThumbnailComponent,
    CarDetailsComponent,
    NewCarComponent,
    CarsService, ToastrService,CarsRouteActivator , CarsListResolverService} from './cars-list/index';
import { AppComponent }   from './app.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes";
import {ErrorComponent} from "./404.component";
import {AuthService} from "./user/authentication.service";


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)

    ],
    declarations: [
        AppComponent,
       CarsListComponent,
        CarThumbnailComponent,
        CarDetailsComponent,
        NewCarComponent,
        ErrorComponent

    ],
    providers: [
        CarsService, ToastrService,CarsRouteActivator , CarsListResolverService ,
        AuthService

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }