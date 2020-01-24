import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { PhotoToCreate } from 'src/app/_Classes/photo-to-create.model';
import { PathUrlsModule } from 'src/app/_Classes/path-urls/path-urls.module';
import { ToastrService } from 'ngx-toastr';
 
@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.scss']
})
export class AddAlbumComponent implements OnInit {

  public isCreate: boolean;//
  _Category: string[];//LoadCategory
  selected = null;		//dropdownlist
  public CategoeryId:number;//onCreate()
  public albumDate:Date;//onCreate()
  public albumName: string;//onCreate()
  public albumTitle: string;//onCreate()
  
  public photo: PhotoToCreate;//onCreate()
  public photos: PhotoToCreate[] = [];//getAlbum
    public response:{dbpathsasstring: ''}//recvied [path[] from api]

  constructor(private _httpClient: HttpClient,private _PathUrlsModule : PathUrlsModule,public toaster :ToastrService) { }

  ngOnInit() {   
   this.isCreate = true;
   this.LoadCategory();

  }
  
 
//split path images
  spliturl = (serverss, index) => {
    if (serverss.includes(",")) {
      const serpatharr = serverss.split(',');
      serverss = serpatharr[index];
  
      return serpatharr[index];
    }
  
     return serverss; 
     
  }
  
   //insert data album
  onCreate = () => {
    this.photo  = {
      CategoeryId: this.selected,
    albumName: this.albumName,
    albumTitle: this.albumTitle,

    ImageNameO: this.spliturl(this.response.dbpathsasstring, 0),  
    ImageNameT: this.spliturl(this.response.dbpathsasstring, 1),
    ImageNameTh : this.spliturl(this.response.dbpathsasstring, 2),
    ImageNameF : this.spliturl(this.response.dbpathsasstring, 3),
    ImageNameFi  : this.spliturl(this.response.dbpathsasstring, 4),
    ImageNameS : this.spliturl(this.response.dbpathsasstring, 5),
    ImageNameSe : this.spliturl(this.response.dbpathsasstring, 6),
    ImageNamE : this.spliturl(this.response.dbpathsasstring, 7),
    ImageNameN : this.spliturl(this.response.dbpathsasstring, 8),
  }
  
   this._httpClient.post(this._PathUrlsModule.pathPhotos, this.photo)
    .subscribe(res => {
      // debugger;
      this.toaster.success('Submitted successfully', 'Add Album  successfully ');
      this.getAlbum();
     this.isCreate = false;
    });
  }

  private getAlbum = () => {
    this._httpClient.get(this._PathUrlsModule.pathPhotos)
    .subscribe(res => {
      this.photos = res as PhotoToCreate[];
    });
  }

 public returnToCreate = () => {
   this.isCreate = true;
 }

  public uploadFinished = (event) => {
    this.response = event;
  }

  public createImgPath = (serverPath: string) => {
    if(serverPath.includes(","))
    {
    var serverPathArr = serverPath.split(',');
    serverPath = serverPathArr[0];
    }
    return `https://localhost:44318/${serverPath}`;
    }
    
    LoadCategory(){
      this._httpClient.get(this._PathUrlsModule.PathLoadCategory).subscribe(
        data => {
          this._Category = data as string[];		// FILL THE ARRAY WITH DATA.
        },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        }
      );
     }
}


 