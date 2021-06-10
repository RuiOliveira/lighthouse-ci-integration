import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { SwitchComponent } from './switch/switch.component';
import { BestPracticesCIComponent } from './best-practices-ci/best-practices-ci.component';

/**
 * Constante con los enrutamientos de la aplicación
 */
export const routes: Routes = [
  {
    path: 'demo',
    component: DemoComponent
  }, {
    path: 'switch',
    component: SwitchComponent
  }, {
    path: 'best-practices-ci',
    component: BestPracticesCIComponent
  }, {
    path: '',
    redirectTo: 'demo',
    pathMatch: 'full'
  }, {
    path: '**',
    redirectTo: 'demo',
    pathMatch: 'full'
  }];

/**
 * Modulo de enrutamiento
 */
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
