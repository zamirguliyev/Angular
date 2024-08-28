import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'product',
        loadComponent:()=>import('./products/products.component').then(c=>c.ProductsComponent)
    }
];
