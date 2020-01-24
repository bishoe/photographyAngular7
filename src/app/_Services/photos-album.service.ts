 
import { Component, OnInit, Output, EventEmitter ,Injectable} from '@angular/core';
import {Http , Response , Headers , RequestOptions ,RequestMethod, } from '@angular/http';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError,Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import 'rxjs/Rx';
//import { map, filter, scan } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { webSocket } from 'rxjs/webSocket';
import { map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { TestScheduler } from 'rxjs/testing';
import {formatDate } from '@angular/common';
import { PhotoModule } from '../_Classes/photo-module.model';
import { CategoryModule } from '../_Classes/category-module.model';
import { PhotoToCreate } from '../_Classes/photo-to-create.model';
import 'rxjs/add/operator/catch';  
import 'rxjs/add/observable/throw';  
import { PathUrlsModule } from '../_Classes/path-urls/path-urls.module';

@Injectable({
  providedIn: 'root'
})
export class PhotosAlbumService {
   _IPhotoModule : PhotoModule; //photoModule
  _PhotoList : PhotoToCreate[];//photoModule[]
  _PhotoToCreateing:PhotoToCreate;//All var in Module
  todayDate= new Date();//datetime
  _ICategoryModule:CategoryModule;//Category
  _CategoryList:CategoryModule[];//Category
  myCat: any[];//Use in Load Cats
  selected = null;		//dropdownlist
 
   constructor(private http :Http,private _HttpClient:HttpClient,private _PathUrlsModule:PathUrlsModule  ) {  
     formatDate(this.todayDate, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');}
//-----------------------Photo-----------------------



putPhotosAlbum(id,_PhotoToCreateing) {
  var body = JSON.stringify(_PhotoToCreateing);
  var headerOptions = new Headers({'Content-Type': 'application/json'});
  var requsetOptions = new RequestOptions({method : RequestMethod.Put,headers :headerOptions});
  
  return this.http.put(this._PathUrlsModule.PhotoList +id  ,body ,requsetOptions).pipe(map(res => res.json()));
}
 



deletePhotosAlbum(id :number){
  return this.http.delete(this._PathUrlsModule.PhotoList + '/' + id).map(res => 
    res.json());
}
 //LoadCategory
LoadCategory(){
  this._HttpClient.get(this._PathUrlsModule.CategoryUrl).subscribe(
    data => {
      this.myCat = data as any[];		// FILL THE ARRAY WITH DATA.
    },
    (err: HttpErrorResponse) => {
      console.log (err.message);
    }
  );
 }
  //LoadCategory

// getNewsw(id:number){
//     this.http.get('https://localhost:44318/api/PhotosAlbums/' + id).map((data: Response) =>{
//       return data.json() as PhotoModule[];
  
//     }).toPromise().then(x=>{
//       this._PhotoList = x ;
//     });
//     }  
  
  //GetdetailsAlbum
 
 
 //GetPhotoAlbum
 
 
 
 //GetPhotoAlbumwithId
 GetPhotoAlbum(id:number): Observable <PhotoToCreate[]>{
return this._HttpClient.get(this._PathUrlsModule.PhotoList + id).map((response: Response)=><PhotoToCreate[]>response.json());
      }

      // GetPhotoAlbum6(id:number){
      //   return this._HttpClient.get('https://localhost:44318/api/PhotosAlbums/' + id)};
        
      // GetPhotoAlbum6(id:number): Observable <PhotoToCreate[]>{
      //   return this._HttpClient.get('https://localhost:44318/api/PhotosAlbums/' + id).map((response: Response)=><PhotoToCreate[]>response.json());
      //         }
        









    // GetPhotoAlbum
    // getdetailsa(id:number) {
    //      return   this._HttpClient.get('https://localhost:44318/api/PhotosAlbums/' + id);
    //     }


    //deleteAlbum
      deleteAlbum(id :number){
        return this.http.delete(this._PathUrlsModule.PathAlbum +  id).map(res => 
          res.json());
      }

 //Get data USe json PAgging

      public getAlbumJSON(): Observable<any> {
        return this.http.get(this._PathUrlsModule.PathAlbum).map(res => res.json());
      }
      public getAlbumJSONId(id:number): Observable<any> {
        return this.http.get(this._PathUrlsModule.SelectAbumById+ id ).map(res => res.json());
      }

//Get All Photo Album with id
      GetAllPhotoAlbumid(id:number){
 this.http.get(this._PathUrlsModule.SelectAbumById + id).map((data: Response) =>{
          return data.json() as PhotoToCreate[];
      
        }).toPromise().then(x=>{
          this._PhotoList = x ;
        });
        }

        GetPhotoAlbumid(id:number): Observable <PhotoToCreate[]>{
  return this.http.get(this._PathUrlsModule.PathAlbum + id).map((response: Response)=><PhotoToCreate[]>response.json());
        }
  
 //Get All Photo Album with id
    
   
    
      // <!-- Get Next Id -->

      //     getnextid(){
      //     this.http.get('http://localhost:56181/api/idNews').map((data: Response) =>{
      //       return data.json() as INewsModule[];
        
      //     }).toPromise().then(x=>{
      //       this._NewsList = x ;
      //     });
      //   }
      //   <!-- Get Next Id -->

         
}


