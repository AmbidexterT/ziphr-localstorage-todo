import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationComponent } from './creation.component';

const routes: Routes = [
  {
    path: '',
    component: CreationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreationRoutingModule {
}
