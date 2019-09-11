import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import {AreasComponent} from './areas/areas.component';
import {AuthorsComponent} from './authors/authors.component';
import { SectionsComponent } from './sections/sections.component';
import { BooksComponent } from './books/books.component';


@NgModule({
  declarations: [CategoriesComponent,AreasComponent,AuthorsComponent, SectionsComponent, BooksComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
