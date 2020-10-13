import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserInputsComponent } from './user-inputs/user-inputs.component';
import { PipesComponent } from './pipes/pipes.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServicesComponent } from './services/services.component';

const appRoutes: Routes = [
    { path: '', component: UserInputsComponent },
    { path: 'pipes', component: PipesComponent},   
    { path: 'services', component: ServicesComponent},
    { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
    { path: '**', redirectTo: '/not-found' }
  ];
  
  @NgModule({
    imports: [
       RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  
  }
  