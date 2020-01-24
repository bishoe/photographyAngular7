import { Component, OnInit ,Output, EventEmitter, Injectable} from '@angular/core';
import { HttpEventType, HttpClient } from '@angular/common/http';

Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  fileToUpload : File = null;
  imageUrl : string = "/assets/img/default-image.png";
  public progress: number;
  public message: string;
  @Output() public onUploadFinished = new EventEmitter();
   constructor(private http: HttpClient) { }
 
  ngOnInit() {
 
  }
//  public images :any[] = [];
//    getFileDetails (event) {
//     //this.imgname = [];
//     for (var i = 0; i < event.target.files.length; i++) {        
//       this.images[i] = {
//         'name' : event.target.files[i].name,
//         'type' : event.target.files[i].type,
//         'size' : event.target.files[i].size,
//         'lastModifiedDate' : event.target.files[i].lastModifiedDate,
//       }
//     }
//    }
  public uploadFile = (files) => {
    if (files.length === 0) {
      return;
        //    console.log(files.name);

    }
   
    let filesToUpload : File[] = files;
    const formData = new FormData();
     Array.from(filesToUpload).map((file, index) => {
   
    // this.imagepath=(file) as any;    

      return formData.append('file'+index, file, file.name);
});   

    this.http.post('https://localhost:44318/api/Upload', formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
        }
      });
  }
 
 //get filename the uploaded
  // files: any[];
  
  // onClickUploadDocument(event){
  //     console.log("clicked");
  //     var file = event.target.files;
  //     this.files = []; // clear the array before pushing your values into it.

  //   //  console.log(file);
  //     for (let i = 0; i < file.length; i++) {
  //       let fileInfo = file[i];
  //     //  console.log(fileInfo);
  //       this.files.push(fileInfo);
  //  }
   

  }

 



