import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.modules';
import { AppComponent } from './app.component';
import { UserInputsComponent } from './user-inputs/user-inputs.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesComponent } from './services/services.component';
import { HeroListComponent } from './pipes/hero-list/hero-list.component';


@NgModule({
  declarations: [
    AppComponent,
    UserInputsComponent,
    PipesComponent,
    ServicesComponent,
    HeroListComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
