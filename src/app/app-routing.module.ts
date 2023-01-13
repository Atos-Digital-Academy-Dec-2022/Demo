import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ConfigsComponent } from './configs/configs.component';


const routes: Routes = [
  {
    path: "pages-users",
    component: UsersComponent,

  },
  {
    path: "configuration",
    component: ConfigsComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
