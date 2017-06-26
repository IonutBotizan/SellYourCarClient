/**
 * Created by ionut on 24-6-2017.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let PaginationComponent = class PaginationComponent {
    constructor() {
        this.pages = [];
        this.currentPage = 1;
        this.isVisible = false;
        this.previousEnabled = false;
        this.nextEnabled = true;
        this.pageChanged = new core_1.EventEmitter();
    }
    get pageSize() {
        return this._pagerPageSize;
    }
    set pageSize(size) {
        this._pagerPageSize = size;
        this.updatePage();
    }
    get totalCars() {
        return this._pagerTotalCars;
    }
    set totalCars(size) {
        this._pagerTotalCars = size;
        this.updatePage();
    }
    updatePage() {
        if (this._pagerPageSize && this._pagerTotalCars) {
            this.totalPages = Math.ceil(this._pagerTotalCars / this._pagerPageSize);
            this.isVisible = true;
            if (this.totalCars >= this.pageSize) {
                for (let i = 1; i < this.totalPages + 1; i++) {
                    this.pages.push(i);
                }
            }
            return;
        }
        this.isVisible = false;
    }
    previousNext(direction, event) {
        let page = this.currentPage;
        if (direction == -1) {
            if (page > 1)
                page--;
        }
        else {
            if (page < this.totalPages)
                page++;
        }
        this.changePage(page, event);
    }
    changePage(page, event) {
        if (event) {
            event.preventDefault();
        }
        if (this.currentPage === page)
            return;
        this.currentPage = page;
        this.previousEnabled = this.currentPage > 1;
        this.nextEnabled = this.currentPage < this.totalPages;
        this.pageChanged.emit(page);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], PaginationComponent.prototype, "pageSize", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], PaginationComponent.prototype, "totalCars", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], PaginationComponent.prototype, "pageChanged", void 0);
PaginationComponent = __decorate([
    core_1.Component({
        selector: 'custompagination',
        templateUrl: './src/app/pagination/pagination.component.html',
        styleUrls: ['./src/app/pagination/pagination.component.css']
    })
], PaginationComponent);
exports.PaginationComponent = PaginationComponent;
//# sourceMappingURL=pagination.component.js.map