import {Component, OnInit} from "@angular/core";
import {CarsService} from "../services/cars.service";
import {ToastrService} from "../services/toastr.service";
import {iCar, iMake, iModel, iPagedResults} from "../services/iCar.model";
import {ConfigService} from "../services/config.service";
import   '../rxjs-operators';
import {ActivatedRoute} from "@angular/router";
/**
 * Created by ionut on 25-6-2017.
 */

@Component({
    templateUrl: './src/app/cars-list/cars-list.component.html'
})

export class CarsListComponent implements OnInit{
    photosRoute: string;
    cars : iCar[];
    Makes: iMake [];
    selectedMake: iMake ={
        id: 0 , name: "all_makes"
    };
    selectedModel : iModel={
        id:0 , name: "all_models"
    };
    Models: iModel[];
    public totalCars : number=0;
    public pageSize: number=2;
    public currentPage: number=1;
    constructor(private carsService : CarsService,
                private  route: ActivatedRoute,
                private toastr : ToastrService,
                private cfg : ConfigService){

    }
    ngOnInit(){
        this.currentPage = +this.route.snapshot.params['page']|| 1;
        this.selectedMake.name= this.route.snapshot.params['make']|| 'all_makes';
        this.photosRoute =  this.cfg.getPhotoUrl();
        this.getAddsPage(this.selectedMake.name , this.selectedModel.name , this.currentPage);
        this.getAllMakes();
    }
    onSelect(makeName){

        this.carsService.getModels(makeName).
        subscribe((models: iModel[])=>{
            this.Models = models;
        });
        this.selectedModel.name = "all_models";
        this.getAddsPage(this.selectedMake.name , this.selectedModel.name , this.currentPage);

    }
    selectModel(){

        this.getAddsPage(this.selectedMake.name ,this.selectedModel.name , this.currentPage );
    }
    pageChanged(event: any){
        this.currentPage = event.page;
        this.getAddsPage(this.selectedMake.name , this.selectedModel.name , this.currentPage);
    }



    getAddsPage(makeName: string , modelName: string , page: number){
        this.carsService.getCars(makeName, modelName , (page-1)*this.pageSize, this.pageSize)
            .subscribe((response: iPagedResults<iCar[]>)=>{
            this.cars = response.results;
            this.totalCars = response.totalAdds;

        });
    }
    getAllMakes()
    {
        this.carsService.getMakes().subscribe((makes: iMake[])=>{
            this.Makes= makes;
        })
    }

    handleClickEvent(eventName){
        this.toastr.success(eventName);
    }
}
