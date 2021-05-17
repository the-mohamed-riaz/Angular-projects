import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsComponent } from './collections/collections.component';
import { TablesComponent } from './tables/tables.component';
import { TabsComponent } from './tabs/tabs.component';
import { KingComponent } from './tabs/king/king.component';
import { QueenComponent } from './tabs/queen/queen.component';
import { RootHomeComponent } from './tabs/root-home/root-home.component';


@NgModule({
  declarations: [
    CollectionsComponent,
    TablesComponent,
    TabsComponent,
    KingComponent,
    QueenComponent,
    RootHomeComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule
  ],
  exports:[
    CollectionsComponent
  ]
})
export class CollectionsModule { }
