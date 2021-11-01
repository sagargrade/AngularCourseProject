import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipeDet: Recipe;
  subscription: Subscription;
  id: number;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((param: Params) => {
      this.id = +param['id'];
      this.recipeDet = this.recipeService.getRecipe(this.id);
    });
  }

  onAddtoShoppingList() {
    this.recipeService.addIngredienttoShoppingList(this.recipeDet.ingredients);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['recipes']);
  }
}
