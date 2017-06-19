import {CarsListComponent} from "./cars-list/cars-list.component";
import {CarDetailsComponent} from "./car-details/car-details.component";
import {Routes} from "@angular/router";
import {NewCarComponent} from "./new-car/new-car.Component";
import {ErrorComponent} from "./404.component";
import {CarsRouteActivator} from "./services/cars-route-activator.service";
import {CarsListResolverService} from "./services/cars-list-resolver.service";
/**
 * Created by ionut on 16-6-2017.
 */


export const appRoutes: Routes =[
    {path: 'cars', component: CarsListComponent, resolve:{cars: CarsListResolverService} }  ,
    {path: 'cars/new', component : NewCarComponent},
    {path: 'cars/:id', component : CarDetailsComponent , canActivate: [CarsRouteActivator]},
    {path: '404', component: ErrorComponent},
    {path: '' , redirectTo: 'cars', pathMatch: 'full'},
    //here loads the user module
    {path: 'user', loadChildren: 'app/user/user.module#UserModule'}
];