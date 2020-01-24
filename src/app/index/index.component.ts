import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryModule } from '../_Classes/category-module.model';
import "rxjs/add/operator/map";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import "rxjs/add/operator/map";
import 'rxjs/Rx';
 import 'rxjs/add/operator/map';
 import {PhotoToCreate} from '../_Classes/photo-to-create.model'
import { from } from 'rxjs';
 import {Http , Response , Headers , RequestOptions ,RequestMethod, } from '@angular/http';
import {    HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
 import 'rxjs/Rx';
//import { map, filter, scan } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { webSocket } from 'rxjs/webSocket';
import { map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { TestScheduler } from 'rxjs/testing';
import {formatDate } from '@angular/common';
import { PhotoModule } from '../_Classes/photo-module.model';
 import 'rxjs/add/operator/catch';  
import 'rxjs/add/observable/throw';  
import { InjectableCompiler } from '@angular/compiler/src/injectable_compiler';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { PathUrlsModule } from '../_Classes/path-urls/path-urls.module';
 

 @Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})


export class IndexComponent implements OnInit {



PhotoList :any;//GetLastAlbum

 

  constructor(private _httpClient: HttpClient,config: NgbCarouselConfig,public _PathUrlsModule :PathUrlsModule ) { 
    config.interval = 2000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = false;  

  }
 
  ngOnInit() {
 this.GetLastAlbum();

 }
// ngAfterViewInit(){
//   this.getAllPhoto();

// }
//GetLastAlbum
public GetLastAlbum(){
return this._httpClient.get(this._PathUrlsModule.SliderPath) .subscribe((res : any[])=>{

this.PhotoList = res;
console.log(this.PhotoList);

});


}
//GetAllcategory
// getCat()
// {
//    this._httpClient.get('https://localhost:44318/api/Categories')
   
//     .toPromise().then(x=>{
//       this.CatList = x;
//     });
// }
// getAllPhoto()
// {
//   return this._httpClient.get(this._PathUrlsModule.pathPhotos) .toPromise().then(res => {
//     this.PhotoList = res;
     
//   });
// }

 }

 
