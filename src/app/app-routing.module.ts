import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule),
  },
  {
    path: 'new',
    loadChildren: () => import('./creation/creation.module').then(m => m.CreationModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
