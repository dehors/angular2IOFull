import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from './category.service';

@Component({
  selector: 'category-list',
  template: `
  <section>
    <section *ngIf="isLoading && !errorMessage">
    Loading our hyperdrives!!! Retrieving data...
    </section>
      <ul>
        <!-- this is the new syntax for ng-repeat -->
        <li *ngFor="let person of category">
            <a href="#" [routerLink]="['/persons', person.id]">
          {{person.name}}
          </a>
        </li>
      </ul>
      <section *ngIf="errorMessage">
        {{errorMessage}}
      </section>
  </section>
  `,
  providers: [CategoryService]
})
export class CategoryListComponent implements OnInit{
  category: Category[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private categoryService : CategoryService){ }

  ngOnInit(){
    this.categoryService
      .getAll()
      .subscribe(
         /* happy path */ p => this.category = p,
         /* error path */ e => this.errorMessage = e,
         /* onComplete */ () => this.isLoading = false);
  }
}