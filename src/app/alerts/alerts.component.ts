import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { PhotoToCreate } from '../_Classes/photo-to-create.model';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  
  public isCreate: boolean;
  _Category: string[];
  selected = null;		
  public CategoeryId:number;
  public albumDate:Date;
  public albumName: string;
  public albumTitle: string;
  
  public photo: PhotoToCreate;
  public photos: PhotoToCreate[] = [];//getUsers
    public response:{dbpathsasstring: ''}//recvied [path from api]

  constructor(private _http: HttpClient,) { }

  ngOnInit() {   
   this.isCreate = true;
   this.LoadCategory();

  }
  
 
//split path 
  spliturl = (serverss, index) => {
    if (serverss.includes(",")) {
      const serpatharr = serverss.split(',');
      serverss = serpatharr[index];
  
      return serpatharr[index];
    }
  
     return serverss; 
     
  }
  
   //insert data
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
  
   this._http.post('https://localhost:44318/api/PhotosAlbums', this.photo)
    .subscribe(res => {
      // debugger;
       this.getUsers();
     this.isCreate = false;
    });
  }

  private getUsers = () => {
    this._http.get('https://localhost:44318/api/PhotosAlbums')
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
      this._http.get('https://localhost:44318/api/LoadCategory').subscribe(
        data => {
          this._Category = data as string[];		// FILL THE ARRAY WITH DATA.
        },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        }
      );
     }
}


 