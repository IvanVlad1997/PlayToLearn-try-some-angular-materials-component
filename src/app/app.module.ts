import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.modules';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { UserInputsComponent } from './user-inputs/user-inputs.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesComponent } from './services/services.component';
import { HeroListComponent } from './pipes/hero-list/hero-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatFormFieldModule} from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
import { MatInputModule } from '@angular/material/input'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatButtonModule } from '@angular/material/button'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu'

import { TestpipePipe } from '../app/pipes/hero-list/testpipe.pipe'

import { HeaderComponent } from './header/header.component';
import { CanFlyPipe } from './pipes/hero-list/can-fly.pipe';



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
   
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
