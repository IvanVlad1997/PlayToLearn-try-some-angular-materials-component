import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.modules';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { UserInputsComponent } from './user-inputs/user-inputs.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesComponent } from './services/services.component';
import { HeroListComponent } from './pipes/hero-list/hero-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';



import { TestpipePipe } from '../app/pipes/hero-list/testpipe.pipe';

import { HeaderComponent } from './header/header.component';
import { CanFlyPipe } from './pipes/hero-list/can-fly.pipe';
import { AngularAutocompleteComponent } from './angular-autocomplete/angular-autocomplete.component';
import { AngularBadgesComponent } from './angular-badges/angular-badges.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { BottomComponent } from './bottom-sheet/bottom/bottom.component';
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChipsComponent } from './chips/chips.component';




@NgModule({
  declarations: [
    AppComponent,
    UserInputsComponent,
    PipesComponent,
    ServicesComponent,
    HeroListComponent,
    HeaderComponent,

    TestpipePipe,

    CanFlyPipe,

    AngularAutocompleteComponent,

    AngularBadgesComponent,

    BottomSheetComponent,

    BottomComponent,

    CardComponent,

    CheckboxComponent,

    ChipsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,

    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatGridListModule,
    MatMenuModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
