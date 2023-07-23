
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';

const routes: Routes = [
{
  path: '',
  pathMatch: 'full',
  component: HomeComponent
}, 
{
  path: 'catalog',
  component: CatalogComponent
}
];


export const AppRoutingModule = RouterModule.forRoot(routes);
