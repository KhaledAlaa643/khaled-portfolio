import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { NgAutocompleteComponent } from './ng-autocomplete/ng-autocomplete.component';
import { RatingInputComponent } from './rating-input/rating-input.component';
import { EditableTableComponent } from './editable-table/editable-table.component';

const routes: Routes = [
  {path:"auto",component:AutoCompleteComponent},
  {path:"ngauto",component:NgAutocompleteComponent},
  {path:"rating",component:RatingInputComponent},
  {path:"table",component:EditableTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
