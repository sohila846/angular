import { ProtectedGuard } from './protected.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [

  {
    path: '',
    component: ProductListComponent,
  },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
   
  },
  {
    path: 'forms',
    children:[
      {
        path: 'template',
        component: TemplateFormComponent,
        canActivate:[ProtectedGuard]
      },
      {
        path: 'reactive',
        component: ReactiveFormComponent,
       
      },
      {
        path: 'reactive-template',
        component: TemplateFormComponent,
       
      },
      {
        path: 'template-reactive',
        component: ReactiveFormComponent,
       
      },
    
    ]
  },
  
  {
    path: '**',
    component: NotfoundComponent,
   
  },
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
