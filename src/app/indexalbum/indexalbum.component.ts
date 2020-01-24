import { Component, OnInit, Injectable } from '@angular/core';
  

import "rxjs/add/operator/map";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import "rxjs/add/operator/map";
import 'rxjs/Rx';
 import 'rxjs/add/operator/map';
  
  import 'rxjs/Rx';
//import { map, filter, scan } from 'rxjs/operators';
import 'rxjs/add/operator/map';
 
import 'rxjs/add/operator/catch';  
import 'rxjs/add/observable/throw';  
import { HttpClient } from '@angular/common/http';
import { PathUrlsModule } from '../_Classes/path-urls/path-urls.module';
import { ActivatedRoute } from '@angular/router';
import { PhotosAlbumService } from '../_Services/photos-album.service';
import { PhotoToCreate } from '../_Classes/photo-to-create.model';
import { ISubscription } from 'rxjs/Subscription';
 import { FormGroup } from '@angular/forms';
//import { Observable } from 'rxjs/Rx';
import {Http , Response , Headers , RequestOptions ,RequestMethod, } from '@angular/http';
import { Subject } from 'rxjs/Rx';
//import {  HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-indexalbum',
  templateUrl: './indexalbum.component.html',
  styles: ['./indexalbum.component.scss'],
  providers:[PhotosAlbumService]

})
export class IndexalbumComponent implements OnInit {
 
   _PhotoToCreate : PhotoToCreate[];//GetAlbumDetails
  statusMessage: string = 'please wait Loading data ... :D';
  constructor(private _http: HttpClient,private http :Http, private _PhotosAlbumService  :PhotosAlbumService,private _activeRoute: ActivatedRoute ,private   _pathUrlsModule : PathUrlsModule) {
  }
  //  private pathPhotos :string = "https://localhost:44318/api/PhotosAlbums";
  // private PathFolder : string="https://localhost:44318/Resources/Images/"
  public PhotoId : number = this._activeRoute.snapshot.params['PhotoId'];

   

  ngOnInit() {

     this.GetAlbumDetails()  //GetAlbumDetails

}
  
//GetAlbumDetails
GetAlbumDetails(){
   
 this._PhotosAlbumService.GetPhotoAlbumid(this.PhotoId).retryWhen((err) => {
  
 return err.scan((retryCount) =>{
retryCount +=1;
if(retryCount < 6 ){
this.statusMessage ='Retrying .....Attept #' + retryCount;
return retryCount;
} else {
throw (err);
}
}, 0).delay(1000)
})
  .subscribe((Album) => {
    if(Album == null){
      this.statusMessage = 'Album does not exist';
    } else {
        this._PhotoToCreate = Album
    }

    },
    (error) =>{
      this.statusMessage = "please try again after sometime"
      console.log(error);
  })


}
 
 }