import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { DetailLampadaComponent } from './detail-lampada/detail-lampada.component';
import { ListLampadaComponent } from './list-lampada/list-lampada.component';

import 'hammerjs';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    DetailLampadaComponent,
    ListLampadaComponent
  ],
  exports:[
    DetailLampadaComponent,
    ListLampadaComponent
  ]
})
export class LampadaModule { }
