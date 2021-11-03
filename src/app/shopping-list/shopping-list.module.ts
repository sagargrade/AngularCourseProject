import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [
    //CommonModule, // for *ngIf and *ngFor
    FormsModule, // as we are working with template driven approch
    RouterModule.forChild([{ path: '', component: ShoppingListComponent }]),
    SharedModule, //Here we only use CommonModule from shared module
  ],
})
export class ShoppingListModule {}
