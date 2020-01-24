import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PathUrlsModule { 
  readonly  SliderPath :string='https://localhost:44318/api/Slider';//slider in index api
  SelectAbumById="https://localhost:44318/api/_SelectAbumById/" //SelectAbumById
  readonly CategoryUrl='https://localhost:44318/api/Categories'; //category api

  readonly pathPhotos :string = "https://localhost:44318/api/PhotosAlbums"; //PhotosAlbums api
  readonly PathAlbum :string = "https://localhost:44318/api/PhotosAlbums/";//PathAlbum api
  readonly  PathFolder : string="https://localhost:44318/Resources/Images/";//PathFolder in api server
readonly PathLoadCategory :string = "https://localhost:44318/api/LoadCategory";//load category in dropdownlist
  CategoryList :any;//CategoryList

    PhotoList :any;//PhotoList

}
