import { NgModule } from '@angular/core';
import { BrowserModule, enableDebugTools } from '@angular/platform-browser';

import { RouterModule,  Routes  } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionsModule } from './collections/collections.module';
// import { ElementsModule } from './elements/elements.module';
import { ModulesModule } from './modules/modules.module';
import { ViewsModule } from './views/views.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
const appRoutes: Routes = []


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    // ElementsModule,
    CollectionsModule,
    ViewsModule,
    ModulesModule,
    AppRoutingModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
