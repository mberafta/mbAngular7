import { Routes } from '@angular/router';
import { ItemListComponent, ItemDetailsComponent, ItemEditComponent, ItemSearchComponent } from './components/item/item.index';

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
    },
    {
        path: 'item-search',
        component: ItemSearchComponent
    }
];

export class RoutesConstants {
    public static routes: Routes = routes;
}