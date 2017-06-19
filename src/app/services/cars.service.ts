/**
 * Created by ionut on 15-6-2017.
 */
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/RX';
import {iCar} from "./iCar.model";
import {Observable} from "rxjs/Observable";
@Injectable()
export class CarsService {

    getCars()  : Observable<iCar[]>{
        let subject = new Subject<iCar[]>();

        setTimeout(()=>{
            subject.next(CARS); subject.complete();
        }, 100);

        return subject;

    }
    getSingleCar(id: number): iCar {
        return CARS.find(car=> car.id===id);
    }

    saveCar(car : iCar){
        car.id = 543;
        CARS.push(car);
    }
    updateCar(car: iCar)
    {
        // here we can use a predicate
        let index = CARS.findIndex(x=> x.id == car.id);
        CARS[index]=car;
    }
}

const CARS :iCar[]  =[{
        id:1 ,
        fullName: "Audi A4",
        mileage: 214500 ,
        price: 13200,
        description : "soft and reliable",
        imageUrl: "AudiA4_1.jpg",
        fuel : "diesel",
        year:2010,
        location : "Cluj Napoca",
        dateAdded: new Date('9/12/2016')


    },
    {
        id:2 ,
        fullName: "BMW Series 7",
        mileage: 104500 ,
        location: "Hunedoara",
        price: 21200,
        description : "luxury and reliable",
        imageUrl: "BMWSeries7_1.jpg",
        fuel : "diesel",
        year: 2011,
        dateAdded: new Date('7/10/2016')

    },
    {
        id:3 ,
        fullName: "Audi A6",
        mileage: 214500 ,
        price: 9600,
        description : "perfect reliable and condition",
        imageUrl: "AudiA6_1.jpg",
        fuel : "petrol",
        location :"Deva",
        year: 2006,
        dateAdded: new Date('3/2/2017')
    },
    {
        id:4 ,
        fullName: "Audi A4", location:"Baia Mare",
        mileage: 214500 ,
        price: 13200,
        description : "soft and reliable",
        imageUrl: "AudiA4_2.jpg",
        fuel : "diesel",
        year: 2012,
        dateAdded: new Date('9/10/2016')

    },
    {
        id:5 ,
        fullName: "Toyota Avensis",
        mileage: 214000 , location : "Hunedoara",
        price: 9200,
        description : "soft and reliable",
        imageUrl: "ToyotaAvensis_1.jpg",
        fuel : "diesel",
        year: 2009,
        dateAdded: new Date('7/12/2016')

    },
    {
        id:6 ,
        fullName: "Dacia Logan",
        mileage: 211500 ,
        price: 3200,
        description : "cheapq  and reliable ",
        imageUrl: "DaciaLogan_1.jpg",
        fuel : "diesel",
        year: 2005,
        location: "Cluj Napoca",
        dateAdded: new Date('11/12/2015')

    }];