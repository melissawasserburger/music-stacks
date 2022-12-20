import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { MainComponent } from './main/main.component';
import { ServiceService } from '../services/service.service';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    MainComponent
  ],
  providers: [
    ServiceService,
  ]
})
export class BaseModule { }
