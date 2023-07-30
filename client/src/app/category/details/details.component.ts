import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from 'src/app/shared/interfaces';
import { IPost } from 'src/app/shared/interfaces/post';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  category: ICategory<IPost> = null;
  constructor(
    categoryService: CategoryService,
    activatedRoute: ActivatedRoute
    ) { 
      const id = activatedRoute.snapshot.params.id;
      categoryService.loadCategory(id).subscribe(category => {
        this.category = category;
      })
    
  }

  ngOnInit(): void {
  }

}
