import {Routes, RouterModule} from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { DetailsComponent } from './details/details.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
    {
        path: 'category',
        pathMatch: 'full',
        redirectTo: 'category/list'
    },
    {
        path: 'category/list',
        component: CategoriesComponent
    },
    {
        path: 'category/details/:id',
        component: DetailsComponent

    },
    {
        path: 'category/new',
        component: NewComponent

    },

    
];
export const CategoryRouterModule = RouterModule.forChild(routes);