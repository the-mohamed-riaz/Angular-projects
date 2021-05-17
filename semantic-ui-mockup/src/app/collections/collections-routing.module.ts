import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from './collections/collections.component';
import { KingComponent } from './tabs/king/king.component';
import { QueenComponent } from './tabs/queen/queen.component';
import { RootHomeComponent } from './tabs/root-home/root-home.component';

const routes: Routes = [
  {
    path:'collections',component:CollectionsComponent,
    children:[
      {path:'',component:RootHomeComponent},
      {path:'king',component:KingComponent},
      {path:'queen',component:QueenComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
