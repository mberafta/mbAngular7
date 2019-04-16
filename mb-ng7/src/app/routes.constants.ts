import { Routes } from '@angular/router';
import {
    ItemListComponent,
    ItemEditComponent,
    ItemSearchComponent
} from './components/item/item.index';

const routes: Routes = [
    { path: '', redirectTo: 'item', pathMatch: 'full' },
    {
        path: 'item',
        component: ItemListComponent
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