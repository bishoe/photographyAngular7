import { Injectable } from '@angular/core';
import { CategoryModule } from '../_Classes/category-module.model';
 import { HttpClientModule, HttpClient } from '@angular/common/http';

  import {Http , Response , Headers , RequestOptions ,RequestMethod } from '@angular/http';
import { ajax } from 'rxjs/ajax';

import "rxjs/add/operator/map";
import { catchError } from 'rxjs/operators';
import { throwError,Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import 'rxjs/Rx';
 //import { map, filter, scan } from 'rxjs/operators';
import 'rxjs/add/operator/map';
 
import { webSocket } from 'rxjs/webSocket';
import { map } from 'rxjs/operators';
 import { TestScheduler } from 'rxjs/testing';
import {formatDate } from '@angular/common';
import "rxjs/add/operator/map";
import 'rxjs/Rx';
 import 'rxjs/add/operator/map';
import { PathUrlsModule } from '../_Classes/path-urls/path-urls.module';
@Injectable({
  providedIn: 'root'
})

export class CategoriesService {
   _CategoryModule : CategoryModule;//_CategoryModule =>postCategories =>putCategories =>
  CatList : CategoryModule[];//CatList getCat()

  constructor(public _httpClient: HttpClient,private _PathUrlsModule : PathUrlsModule) { }
   
  postCategories() {
    return this._httpClient.post(this._PathUrlsModule.CategoryUrl, this._CategoryModule);
  }
  putCategories() {
    return this._httpClient.put(this._PathUrlsModule.CategoryUrl + '/'+ this._CategoryModule.CategoeryId, this._CategoryModule);
  }
//getCatsusePaging
  public getCatsPaging(): Observable<any> {
    return this._httpClient.get(this._PathUrlsModule.CategoryUrl);
}


//getCats
getCats()
{
   this._httpClient.get(this._PathUrlsModule.CategoryUrl).map((data : Response) =>{
      return data.json() as CategoryModule[];
    }).toPromise().then(x=>{
      this.CatList = x;
    });
}
//
getAllCat()
{
  return this._httpClient.get(this._PathUrlsModule.CategoryUrl) .toPromise().then(res => {
    this._PathUrlsModule.CategoryList = res;
     
  });

}
  deleteCategories(id) {
    return this._httpClient.delete(this._PathUrlsModule.CategoryUrl + '/Categories/'+ id);
  }

  
  
  }   

