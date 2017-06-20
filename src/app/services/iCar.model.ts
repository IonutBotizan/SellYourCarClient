/**
 * Created by ionut on 20-6-2017.
 */

export interface iCar
{
    id: number ,
    fullName: string,
    mileage: number ,
    price: number,
    description : string ,
    imageUrl: string,
    fuel : string,
    year:number ,
    location : string ,
    dateAdded : Date ,
    model : iModel
}
export interface iMake
{
    id: number  ,
    name : string,

}
export interface iModel
{
    id: number,
    name: string ,
    make: iMake,
    adds: iCar[]
}
export interface iPagedResults<T>{
    results: T;
    totalItems: number;
}
