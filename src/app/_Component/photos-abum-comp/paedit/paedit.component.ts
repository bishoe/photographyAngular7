import { Component, OnInit, Injectable } from '@angular/core';
  import { PhotoToCreate } from 'src/app/_Classes/photo-to-create.model';
import { CategoryModule } from 'src/app/_Classes/category-module.model';
 import { ActivatedRoute, Router } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';
 import { HttpClient } from '@angular/common/http';
import { NgForm, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { PhotosAlbumService } from 'src/app/_Services/photos-album.service';
import { CategoriesService } from 'src/app/_Services/categories.service';
import { PathUrlsModule } from 'src/app/_Classes/path-urls/path-urls.module';
 import{Location}from  '@angular/common'
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-paedit',
  templateUrl: './paedit.component.html',
  styleUrls: ['./paedit.component.scss'],
  providers:[PhotosAlbumService,CategoriesService]
})
export class PAEditComponent implements OnInit {
   subscription: ISubscription;
  statusMessage: string = 'please wait Loading data ... :D';
  myCat: any[];//cats
  selected = null;//dropdownlist
  _PhotoToCreate : PhotoToCreate[];//GetPhotoAlbumid
  fileToUpload : File = null;//fileToUpload
  imageUrl : string = "/assets/img/default-image.png";
  public isCreate: boolean;
  _Category: string[];
   public CategoeryId:number;//
  public albumDate:Date;//onUpdate()
  public albumName: string;////onUpdate()
  public albumTitle: string;//onUpdate()
  public photos: PhotoToCreate[] = [];//getAlbum in edit page

  public photo: PhotoToCreate;
     public response:{dbpathsasstring: ''}

  enableEdit: boolean = false;
  constructor(private _PhotosAlbumService: PhotosAlbumService,
    private _activatedRoute: ActivatedRoute,
     private _httpClient: HttpClient ,private _PathUrlsModule:PathUrlsModule ,private  _location: Location) { }

     BackUrl() {
      this._location.back(); // <-- go back to previous location on cancel
    }
  
    public id: number;
    AlbumeForm: FormGroup;  

  ngOnInit() {
    this.isCreate = true;
    this.LoadCategory();
    this.id= this._activatedRoute.snapshot.params['PhotoId'];
     this._PhotosAlbumService.GetPhotoAlbumid(this.id).retryWhen((err) => {
      return err.scan((retryCount) =>{
retryCount +=1;
if(retryCount < 6 ){
this.statusMessage ='Retrying .....Attept #' + retryCount;
return retryCount;
} else {
throw (err);
}
}, 0).delay(1000)
})//
.subscribe((PhotoAlbum) => {
if(PhotoAlbum == null){
  this.statusMessage = 'Album does not exist';
} else {
    this._PhotoToCreate = PhotoAlbum
}

},
(error) =>{
  this.statusMessage = "please try again after sometime"
  // console.log(error);
})


    this._PhotosAlbumService.LoadCategory();
  }

      PhotoId =this._activatedRoute.snapshot.params['PhotoId'];


  // spliturl = (serverss, index) => {
  //   if (serverss.includes(",")) {
  //     const serpatharr = serverss.split(',');
  //     serverss = serpatharr[index];
  
  //     return serpatharr[index];
  //   }
  
  //    return serverss; 
     
  // }


  onUpdate = () => {
    this.photo  = {
      PhotoId  : this.id,
      CategoeryId: this.selected,
    albumName: this.albumName,
    albumTitle: this.albumTitle }
     console.log(this._activatedRoute.snapshot.params['PhotoId'])
   this._PhotosAlbumService.putPhotosAlbum( this.PhotoId,this.photo)
    .subscribe(res => {
        debugger;
      // this.getUsers();
     this.isCreate = false;
    });
  }

  // private getUsers = () => {
  //   this._httpClient.get('https://localhost:44318/api/PhotosAlbums')
  //   .subscribe(res => {
  //     this.photos = res as PhotoToCreate[];
  //   });
  // }

 public returnToCreate = () => {
   this.isCreate = true;
 }

  // public uploadFinished = (event) => {
  //   this.response = event;
  // }

  // public createImgPath = (serverPath: string) => {
  //   if(serverPath.includes(","))
  //   {
  //   var serverPathArr = serverPath.split(',');
  //   serverPath = serverPathArr[0];
  //   }
  //   return `https://localhost:44318/${serverPath}`;
  //   }
    
    LoadCategory(){
      this._httpClient.get('https://localhost:44318/api/LoadCategory').subscribe(
        data => {
          this._Category = data as string[];		// FILL THE ARRAY WITH DATA.
        },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        }
      );
     }
}


 