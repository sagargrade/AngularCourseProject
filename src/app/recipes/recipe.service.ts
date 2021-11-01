import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [];

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Besan Ladoo',
  //     'Tasty and Sweet',
  //     'https://st2.depositphotos.com/1039098/8856/i/950/depositphotos_88565028-stock-photo-indian-sweets-besan-ladoo.jpg',
  //     [new Ingredient('Besan', 1), new Ingredient('Sugar', 1)]
  //   ),
  //   new Recipe(
  //     'Rice Kheer',
  //     'Heathy and Yummy',
  //     'https://images.hindi.news18.com/ibnkhabar/uploads/2021/09/kheer-16320471514x3.jpg',
  //     [
  //       new Ingredient('Milk', 1),
  //       new Ingredient('Rice', 1),
  //       new Ingredient('Sugar', 1),
  //     ]
  //   ),
  // ];

  constructor(private slservice: ShoppinglistService) {}

  getRecipes() {
    return this.recipes.slice(); /* slice return new array which is just a copy of ot */
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredienttoShoppingList(ingredients: Ingredient[]) {
    this.slservice.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }
}
