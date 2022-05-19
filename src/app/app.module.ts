import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { FormsModule } from '@angular/forms';
import { TimerComponent } from './count-down-timer/timer/timer.component';
import { ClickTriggerDirective } from './shared-directives/click-trigger/click-trigger.directive';

@NgModule({
  declarations: [
    AppComponent,
    BottomSheetComponent,
    CountDownTimerComponent,
    MainPageComponent,
    MainNavigationComponent,
    TimerComponent,
    ClickTriggerDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
