import { Component, OnInit, Injectable } from '@angular/core';
import {  CategoriesService } from 'src/app/_Services/categories.service';
 import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
 
@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss'],
  providers:[CategoriesService]
})
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {

 
  constructor(private _CategoriesService : CategoriesService   ,private toastr:ToastrService) { }
 
  ngOnInit() {
    this.resetForm();
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
 
OnSubmit(form :NgForm){
  if (this._CategoriesService._CategoryModule.CategoeryId == 0 )
    this.insertCat(form);
    else
     this.Onupdate(form);
   }

   insertCat(form: NgForm) {
    this._CategoriesService.postCategories().subscribe(
      res => {
        debugger;
        this.resetForm(form);
       this.toastr.success('Submitted successfully', 'Categry');
      //  this.__CategoriesService.refreshList();
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
      this.toastr.info('Submitted successfully', 'Updeted Categoey');
      //  this.__CategoriesService.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

}

