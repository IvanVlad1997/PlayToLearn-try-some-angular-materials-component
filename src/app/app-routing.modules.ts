import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserInputsComponent } from './user-inputs/user-inputs.component';
import { PipesComponent } from './pipes/pipes.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServicesComponent } from './services/services.component';
import {AngularAutocompleteComponent} from './angular-autocomplete/angular-autocomplete.component';
import {AngularBadgesComponent} from './angular-badges/angular-badges.component';
import {BottomSheetComponent} from './bottom-sheet/bottom-sheet.component';
import {CardComponent} from './card/card.component';
import {CheckboxComponent} from './checkbox/checkbox.component';
import {ChipsComponent} from './chips/chips.component';

const appRoutes: Routes = [
  { path: '', component: UserInputsComponent },
  { path: 'pipes', component: PipesComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'autocomplete', component: AngularAutocompleteComponent},
  { path: 'badges' , component: AngularBadgesComponent},
  { path: 'bottom-sheet', component: BottomSheetComponent},
  { path: 'card', component: CardComponent},
  { path: 'checkbox', component: CheckboxComponent},
  { path: 'chips' , component: ChipsComponent},
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
