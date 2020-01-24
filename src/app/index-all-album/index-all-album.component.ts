import { Component, OnInit } from '@angular/core';
import { PhotosAlbumService } from '../_Services/photos-album.service';
import { ActivatedRoute } from '@angular/router';
import { PathUrlsModule } from '../_Classes/path-urls/path-urls.module';
import { PhotoToCreate } from '../_Classes/photo-to-create.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-index-all-album',
  templateUrl: './index-all-album.component.html',
  styles: []
})
export class IndexAllAlbumComponent implements OnInit {
  _PhotoToCreateT: PhotoToCreate[];
  dtOptions: DataTables.Settings = {};//DataTable
  dtTrigger: Subject<any> = new Subject();//DataTable
    public id : number = this._activeRoute.snapshot.params['id'];

  constructor(private _PhotosAlbumService:PhotosAlbumService,private _activeRoute: ActivatedRoute,private _pathUrlsModule:PathUrlsModule) { }

  ngOnInit() {

  //Pagging //DataTable
  this.dtOptions = {
    
    pagingType: 'full_numbers',
    pageLength: 2,
    processing: true
   };

   //EnD Pagging

    this.GetPhotoJson();//getAlbumJSON use in pagging
  }




GetPhotoJson(){
//getAlbumJSON use in pagging
//All var here From Api Not PhotoToCreate => AlbumName Not albumName  
this._PhotosAlbumService.getAlbumJSONId(this.id).subscribe(data => {
  this._PhotoToCreateT = data;
  //console.log(this._PhotoToCreateT)
  this.dtTrigger.next();
}
);  //getAlbumJSON use in pagging


}
}
