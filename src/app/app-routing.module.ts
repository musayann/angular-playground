import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  MainComponent
} from './main.component';
import {
  HomeComponent
} from './home.component';
const routes: Routes = [{
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'crisis-center',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
