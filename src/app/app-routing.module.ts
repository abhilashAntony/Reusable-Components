import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path: '', component: MainPageComponent, children: [
      { path: 'bottom-sheet', component: BottomSheetComponent },
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
