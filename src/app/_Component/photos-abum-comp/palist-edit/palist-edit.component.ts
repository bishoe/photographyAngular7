import { Component, OnInit, Renderer } from '@angular/core';
import { PhotoToCreate } from 'src/app/_Classes/photo-to-create.model';
import { Subject } from 'rxjs';
import { PhotosAlbumService } from 'src/app/_Services/photos-album.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PathUrlsModule } from 'src/app/_Classes/path-urls/path-urls.module';
 
@Component({
  selector: 'app-palist-edit',
  templateUrl: './palist-edit.component.html',
  styleUrls: ['./palist-edit.component.scss']
})
export class PAListEditComponent implements OnInit {
_PhotoToCreate:PhotoToCreate; //getAlbumJSON

_Category: string[];//LoadCategory
selected = null;		//LoadCategory

//show Photos in   pagging template
 dtOptions: DataTables.Settings = {};
dtTrigger: Subject<any> = new Subject();
_PhotoToCreateT : any[] = []; //show Photos in loop in pagging template
//
  constructor(private _PhotosAlbumService: PhotosAlbumService,    private route: ActivatedRoute,private renderer: Renderer, private router: Router,private _PathUrlsModule:PathUrlsModule) { }
ngOnInit() {
  //Pagging
  this.dtOptions = {
    
    pagingType: 'full_numbers',
    pageLength: 2,
    processing: true

  };
  //EnD Pagging
//getAlbumJSON use in pagging
//All var here From Api Not PhotoToCreate => AlbumName Not albumName  
  this._PhotosAlbumService.getAlbumJSON().subscribe(data => {
    this._PhotoToCreateT = data;
    //console.log(this._PhotoToCreateT)
    this.dtTrigger.next();
  }
  );  //getAlbumJSON use in pagging
 
 }
 resetForm(form? : NgForm){
  if (form != null){
form.reset();
}
}
ngAfterViewInit(): void {
  this.renderer.listenGlobal('document', 'click', (event) => {
    if (event.target.hasAttribute("view-person-id")) {
      this.router.navigate(["/person/" + event.target.getAttribute("view-person-id")]);
    }
  });
}
  onDelete(id: number){
    if (confirm('are you sure to delete thia record  ??')==true){
      this._PhotosAlbumService.deleteAlbum(id).subscribe(x => {
        this._PhotosAlbumService.getAlbumJSON();
        // this._PhotosAlbumService.warning("Deleted Successfully","Delete Category");
      });
    }


  }}