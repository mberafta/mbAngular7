import { RoutesConstants } from './routes.constants';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemListComponent, ItemDetailsComponent, ItemEditComponent, ItemSearchComponent } from './components/item/item.index';


@NgModule({
  imports: [RouterModule.forRoot(RoutesConstants.routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
