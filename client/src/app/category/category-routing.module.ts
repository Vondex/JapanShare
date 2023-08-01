
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { NewComponent } from './new/new.component';
import { CatalogComponent } from '../catalog/catalog.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: 'category',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'catalog',
        pathMatch: 'full',
        component: CatalogComponent,
        data: {
          title: 'CATEGORY'
        }
      },
      {
        path: 'new',
        component: NewComponent,
        data: {
          title: 'NEW CATEGORY',
          isLogged: true
        }
      },
      {
        path: 'detail/:id',
        component: DetailsComponent,
        data: {
          title: 'CATEGORY DETAILS',
          isLogged: true
        }
      }
    ]
  }
];

export const CategoryRouterModule = RouterModule.forChild(routes);