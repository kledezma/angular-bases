import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddpjComponent } from './components/addpj/addpj.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddpjComponent
  ]
    ,
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:
  [
    MainPageComponent
  ],
})
export class DbzModule { }
