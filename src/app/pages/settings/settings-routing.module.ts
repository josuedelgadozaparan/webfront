import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AreasComponent } from './areas/areas.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { SectionsComponent } from './sections/sections.component';
import { CategoriesComponent } from './categories/categories.component';


const routes: Routes = [
  {path:'areas',component:AreasComponent},
  {path:'authors',component:AuthorsComponent},
  {path:'books',component:BooksComponent},
  {path:'sections',component:SectionsComponent},
  {path:'categories',component:CategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
