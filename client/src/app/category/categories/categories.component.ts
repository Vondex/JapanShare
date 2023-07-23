import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { ICategory } from '../../shared/interfaces';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit, AfterViewInit {

  categories: ICategory[];
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.loadCategories().subscribe(categories => {

      this.categories = categories;
    })
  }

  ngAfterViewInit(): void {
    console.log('View was successfully initialised!')
  }

}
