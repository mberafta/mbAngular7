import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemListComponent, ItemDetailsComponent, ItemEditComponent } from './components/item/item.index';

const routes: Routes = [
  { path: '', redirectTo: 'item', pathMatch: 'full' },
  {
    path: 'item',
    component: ItemListComponent,
    children: [
      { path: 'details/:id', component: ItemDetailsComponent }
    ]
  },
  {
    path: 'item/:id',
    component: ItemListComponent,
    children: [
      { path: 'details/:id', component: ItemDetailsComponent }
    ]
  },
  {
    path: 'item-edit',
    component: ItemEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
