import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreationRoutingModule } from './creation-routing.module';
import { CreationComponent } from './creation.component';

@NgModule({
  declarations: [
    CreationComponent,
  ],
  imports: [
    CommonModule,
    CreationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CreationModule {
}
