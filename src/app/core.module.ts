import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AuthIterceptorService } from './auth/auth-intercetor.service';
import { RecipeService } from './recipes/recipe.service';
import { ShoppinglistService } from './shopping-list/shopping-list.service';

@NgModule({
  providers: [
    ShoppinglistService,
    RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthIterceptorService,
      multi: true,
    },
  ],
})
export class CoreModule {}
