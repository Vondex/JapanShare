import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitHandler(data: any): void {
    this.categoryService.addCategory(data)
      .subscribe({
        next: () => {
          this.router.navigate(['/catalog']);
        },
        error: (err) => {

        }
      });
  }

}