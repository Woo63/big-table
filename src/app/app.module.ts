import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { RouterModule, Routes } from "@angular/router";
import { TableComponent } from './table/table.component';
import { DateFilterComponent } from './date-filter/date-filter.component';
import { FilterBlockComponent } from './filter-block/filter-block.component';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule} from "@angular/forms";

const appRoutes: Routes =[
  {path:'', component: FirstPageComponent},
  {path:'second', component: SecondPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SecondPageComponent,
    FirstPageComponent,
    TableComponent,
    DateFilterComponent,
    FilterBlockComponent
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
