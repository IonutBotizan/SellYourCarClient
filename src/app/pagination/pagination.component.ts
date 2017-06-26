/**
 * Created by ionut on 24-6-2017.
 */


import {Component, EventEmitter, Input, Output} from "@angular/core";
@Component({
   selector:'custompagination',
    templateUrl: './src/app/pagination/pagination.component.html',
    styleUrls: ['./src/app/pagination/pagination.component.css']

})
export class PaginationComponent {
  private _pagerTotalCars: number;
  private _pagerPageSize: number;

  totalPages: number;
  pages: number[]=[];
  currentPage: number =1;
  isVisible: boolean = false;
 previousEnabled: boolean = false;
 nextEnabled: boolean = true;

 @Input() get pageSize(): number{
     return this._pagerPageSize;
 }
 set pageSize(size: number){
     this._pagerPageSize  = size;
     this.updatePage();
 }

@Input() get totalCars(): number{
    return this._pagerTotalCars;
}
set totalCars(size: number){
     this._pagerTotalCars = size;
     this.updatePage();
}
@Output() pageChanged: EventEmitter<number> = new EventEmitter();

updatePage(){
    if(this._pagerPageSize && this._pagerTotalCars){
        this.totalPages  = Math.ceil(this._pagerTotalCars/this._pagerPageSize);
        this.isVisible = true;
        if(this.totalCars >=this.pageSize){
            for(let i=1; i<this.totalPages+1;i++){
                this.pages.push(i);
            }

        }
        return ;

    }
    this.isVisible=false;
}
previousNext(direction: number , event?: MouseEvent){
    let page: number = this.currentPage;
    if(direction == -1){
        if(page >1)
            page--;
    }else{
        if(page < this.totalPages)
            page++;
    }
    this.changePage(page , event);

}
changePage(page: number , event? : MouseEvent){
    if(event){
        event.preventDefault();
    }
    if(this.currentPage === page) return;
    this.currentPage = page;
    this.previousEnabled = this.currentPage >1;
    this.nextEnabled = this.currentPage < this.totalPages;
    this.pageChanged.emit(page);
}




}