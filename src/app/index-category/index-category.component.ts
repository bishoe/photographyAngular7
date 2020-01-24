import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../_Services/categories.service';

@Component({
  selector: 'app-index-category',
  templateUrl: './index-category.component.html',
  styleUrls: ['./index-category.component.scss'],
  providers:[CategoriesService]

})
export class IndexCategoryComponent implements OnInit {

  constructor(private _categoryservices : CategoriesService) { }

  ngOnInit() {

    //getAllCat in indexsite
    this._categoryservices.getAllCat()

  }

}
