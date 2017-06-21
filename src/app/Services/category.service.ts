import { Injectable } from '@angular/core';
import { Category } from '../category';
import { CATEGORIES } from '../mock-categories';

@Injectable()
export class CategoryService {

  constructor() { }

  getCategories(): Category[] { 
      console.log(CATEGORIES);     
      return CATEGORIES;
  }

}
