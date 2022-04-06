import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  categoris$: any;

  constructor(category: CategoryService) {
    this.categoris$ = category.getCategory();
    console.log(this.categoris$);
  }

  ngOnInit(): void {}
}
