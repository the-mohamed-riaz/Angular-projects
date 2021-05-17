import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsComponent } from './elements/elements.component';
import { PlaceHolderComponent } from './place-holder/place-holder.component';
import { TimesDirective } from './times.directive';
import { SegmentComponent } from './segment/segment.component';


@NgModule({
  declarations: [
    ElementsComponent,
    PlaceHolderComponent,
    TimesDirective,
    SegmentComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule
  ],
  exports:[
    ElementsComponent
  ]
})
export class ElementsModule { }
