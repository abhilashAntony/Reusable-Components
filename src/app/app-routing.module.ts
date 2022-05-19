import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ContentPageComponent } from './resusable-pages/content-page/content-page.component';
import { CountDownTimerComponent } from './resusable-pages/count-down-timer/count-down-timer.component';

const routes: Routes = [
  {
    path: '', component: MainPageComponent, children: [
      { path: 'bottom-sheet', component: ContentPageComponent },
      { path: 'count-down-timer', component: CountDownTimerComponent },
      { path: '', component: MainNavigationComponent}
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
