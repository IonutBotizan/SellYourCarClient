/**
 * Created by ionut on 1-7-2017.
 */
import {Component, OnInit, ViewChild} from "@angular/core";
import {iMake, iModel, iCar, iPagedResults} from "../services/iCar.model";
import {ActivatedRoute} from "@angular/router";
import {CarsService} from "../services/cars.service";
import {Location} from '@angular/common';
import {ConfigService} from "../services/config.service";
import {ModalDirective} from 'ngx-bootstrap';
 @Component({
templateUrl: './src/app/cars-list/carsSearchComponent.html'
})
export class CarsSearchComponent implements OnInit{
     @ViewChild('childModal') public childModal: ModalDirective;


     selectedMake:  iMake= { id:0 , name:"all_makes"};
  selectedModel: iModel= {id:0 , name:"all_models"};

  Makes: iMake[]=[];
  Models: iModel[]=[];
  cars : iCar[] = [];
  totalCars: number;
  photosRoute : string;
  pageSize: number=2;
  makeNameUrl :string =this.route.snapshot.paramMap.get('makeName');
  modelNameUrl:  string =this.route.snapshot.paramMap.get('modelName');
  pageIdUrl: number = +this.route.snapshot.paramMap.get('page');

  //Modal related stuff
     @ViewChild('modal')
     modal: any;
     items: string[] = ['item1', 'item2', 'item3'];
     selected: string;
     output: string;
     selectedCarId: number;
     carDetails: iCar;
     selectedCarLoaded: boolean = false;
     index: number = 0;
     backdropOptions = [true, false, 'static'];
     animation: boolean = true;
     keyboard: boolean = true;
     backdrop: string | boolean = true;



  constructor(private route: ActivatedRoute ,
              private carsService: CarsService ,private location: Location, private cfg : ConfigService){

  }
  ngOnInit(){
      this.photosRoute = this.cfg.getPhotoUrl();
      this.selectedModel.name=this.modelNameUrl;
      this.selectedMake.name = this.makeNameUrl;

      this.carsService.getMakes().subscribe((response: iMake[])=>{
         this.Makes = response;
      });
      this.carsService.getModels(this.selectedMake.name).
      subscribe((models: iModel[])=>{
          this.Models = models;
      });
      console.log('On Init  function'+this.pageIdUrl);
      this.getTheCars(this.selectedMake.name , this.selectedModel.name , this.pageIdUrl);
  }
  onSelect(makeName){
      this.pageIdUrl=1;
      this.getTheCars(makeName , 'all_models' , this.pageIdUrl);
      this.location.go('autoturisme/'+makeName+'/all_models/'+ '1');
      this.carsService.getModels(makeName).
      subscribe((models: iModel[])=>{
          this.Models = models;
      });
  }
  onModelSelect(modelName){
      this.pageIdUrl=1;
      this.location.go('autoturisme/'+this.selectedMake.name+'/'+modelName+'/'+this.pageIdUrl);
      this.getTheCars(this.selectedMake.name , modelName , this.pageIdUrl);
  }
  pageChanged(event : any){
       this.pageIdUrl = event.page;
      console.log('i n page changed pageURL is ' +this.pageIdUrl);

       console.log('In pPageChanged event is : '+ event.page);
      this.location.go('autoturisme/'+this.selectedMake.name+'/'+this.selectedModel.name+'/'+this.pageIdUrl);

      this.getTheCars(this.selectedMake.name , this.selectedModel.name , this.pageIdUrl);

  }
  getTheCars(makeName: string, modelName: string , currentPage: number){
      return this.carsService.getCars(makeName, modelName, (currentPage-1)*this.pageSize, this.pageSize)
          .subscribe((response: iPagedResults<iCar[]>)=>{
              this.cars = response.results;
              this.totalCars = response.totalAdds;
          });
  }

     viewCarDetails(id: number) {
         this.selectedCarId= id;

         this.carsService.getSingleCar(this.selectedCarId)
             .subscribe((car: iCar) => {
                     this.carDetails = this.carsService.getSerialized<iCar>(car);

                     this.selectedCarLoaded = true;
                     this.childModal.show();
                 });
     }

     public hideChildModal(): void {
         this.childModal.hide();
     }


}