import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'new', component: NewComponent },
  { path: ':id', component: DetailComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
