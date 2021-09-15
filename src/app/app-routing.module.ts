import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculationComponent } from './calculation/calculation.component';
import { FarmDetailsComponent } from './farm-details/farm-details.component';
import { FrontPageComponent } from './front-page/front-page.component';

const routes: Routes = [
  {
    path:'',
    component:FrontPageComponent
  },
  {
    path:'farm-details',
    component:FarmDetailsComponent
  },
  {
    path:'calculation',
    component:CalculationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
