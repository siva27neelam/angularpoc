import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { ListofusersComponent } from './listofusers/listofusers.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { SearchuserComponent } from './searchuser/searchuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { ViewuserComponent } from './viewuser/viewuser.component';

const routes: Routes = [
  {path: 'create', component: RegisteruserComponent},
  {path: '', component: ListofusersComponent},
  {path: 'list', component: ListofusersComponent},
  {path: 'view/:id', component: ViewuserComponent},
  {path: 'delete/:id', component: DeleteuserComponent},
  {path: 'edit/:id', component: UpdateuserComponent},
  {path: 'search', component: SearchuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
