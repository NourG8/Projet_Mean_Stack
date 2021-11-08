import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent} from './table/table.component';
import { ContenuComponent } from './contenu/contenu.component';

const routes: Routes = [
{ path: 'first-component', component:TableComponent },
{ path: '', component:ContenuComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
