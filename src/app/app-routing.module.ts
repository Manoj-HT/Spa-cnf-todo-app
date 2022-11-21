import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { CreateComponent } from './components/create/create.component';
import { ViewlistComponent } from './components/viewlist/viewlist.component';

const routes: Routes = [
  {
    path : '',
    component : BodyComponent
  },
  {
    path : 'create',
    component : CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
