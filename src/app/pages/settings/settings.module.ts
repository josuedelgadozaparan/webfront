import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { AuthorsComponent } from './authors/authors.component';
import { SectionsComponent } from './sections/sections.component';
import { BooksComponent } from './books/books.component';
import { AreasComponent } from './areas/areas.component';


@NgModule({
  declarations: [CategoriesComponent, AuthorsComponent, SectionsComponent, BooksComponent, AreasComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
