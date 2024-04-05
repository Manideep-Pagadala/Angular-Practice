import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './group/login/login.component';
import { HomeComponent } from './group/home/home.component';
import { RegComponent } from './group/reg/reg.component';
import { TwowaybindingComponent } from './group/twowaybinding/twowaybinding.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"reg",
    component:RegComponent
  },
  {
    path:"twoway",
    component:TwowaybindingComponent
  },
  {
    path:"**",
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
