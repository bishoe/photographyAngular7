import { Component, OnInit, Injectable } from '@angular/core';
 import 'rxjs/add/operator/map';
import { HttpClientModule } from '@angular/common/http';
 import { DataTablesModule } from 'angular-datatables';
import { Http, Response } from '@angular/http';
import { NgForm } from '@angular/forms';
import { CategoriesService  } from 'src/app/_Services/categories.service';
import { Subject } from 'rxjs';
import { CreateCategoryComponent } from '../create-category/create-category.component';
import { CategoryModule } from 'src/app/_Classes/category-module.model';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-all-category',
  templateUrl: './all-category.component.html',
  styleUrls: ['./all-category.component.scss'],
  providers:  [ CategoriesService ]  

})
export class AllCategoryComponent implements OnInit {

  dtOptions: DataTables.Settings = {};//getCatsPaging
  dtTrigger: Subject<any> = new Subject();//getCatsPaging
  cats : any[] = [];//getCatsPaging

  constructor(private _CategoriesService:CategoriesService,private _CreateCategoryComponent: CreateCategoryComponent,private toastr:ToastrService ) { }

  ngOnInit() {
     
    this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 2,
        processing: true

      };
      //getCatsPaging
    this._CategoriesService.getCatsPaging().subscribe(data => {
        this.cats = data;
        this.dtTrigger.next();
      });   
  }  
    resetForm(form? : NgForm){
    if (form != null)
      form.form.reset();
      this._CategoriesService._CategoryModule ={     
        CategoeryId:0,
       NameCategory:'',
        CategoryDate:null
     }
    
}
OnSubmitCategory(form :NgForm){
  if (this._CategoriesService._CategoryModule.CategoeryId > 0 )
  this.Onupdate(form);

    else
    this.insertCat(form);

  }

  insertCat(form: NgForm) {
    this._CategoriesService.postCategories().subscribe(
      res => {
        debugger;
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Add Cat  successfully ');
        //  this._CategoriesServices.refreshList();
      this._CategoriesService.getCatsPaging();

      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }
  Onupdate(form: NgForm) {
    this._CategoriesService.putCategories().subscribe(
      res => {
        this.resetForm(form);
        this._CategoriesService.getCats();

        this.toastr.info('Submitted successfully', 'Updeted Cats  successfully');
      //  this._CategoriesServices.refreshList();
      this._CategoriesService.getCatsPaging();

      },
      err => {
        console.log(err);
      }
    )
  }
  // showForEdit(CatModule : CategoryModule){

  //   this._CategoriesService._CategoryModule = Object.assign({},CatModule);
  //   this._CategoriesService.getCats();

 
  // }

  //Delete cat
  onDelete(id: number){
    if (confirm('are you sure to delete thia record  ??')==true){
      this._CategoriesService.deleteCategories(id).subscribe(x => {
     this._CategoriesService.getCats();
     this.resetForm();
    this.toastr.warning("Deleted Successfully","Delete Category");
      })
    }
  }

}
