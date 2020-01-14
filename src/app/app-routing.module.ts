import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'component-communication',
    // loadChildren: 'app/componenet-communication/component-communication.module#ComponentCommunicationModule' // before angular 8
    /**
     * Use the dynamic import syntax to import your module in the loadChildren property of Angular Router routes.
     * The dynamic import API is a standard browser's API introduced in modern browers.
     * Dynamic import() introduces a new function-like form of import that unlocks new capabilities compared to static import.
     * Since import() returns a promise, it’s possible to use async/await instead of the then-based callback style.
     */
    loadChildren: () =>
      import('./component-communication/component-communication.module').then(m => m.ComponentCommunicationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
