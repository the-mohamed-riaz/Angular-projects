import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsComponent } from './views/views.component';
import { StatsComponent } from './stats/stats.component';
import { ItemsComponent } from './items/items.component';


@NgModule({
  declarations: [
    ViewsComponent,
    StatsComponent,
    ItemsComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule
  ],exports:[
    ViewsComponent
  ]
})
export class ViewsModule { }
