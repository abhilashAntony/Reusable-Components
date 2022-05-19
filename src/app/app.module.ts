import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MainPageComponent } from './main-page/main-page.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { FormsModule } from '@angular/forms';

import { ClickTriggerDirective } from './shared-directives/click-trigger/click-trigger.directive';
import { CountDownTimerComponent } from './resusable-pages/count-down-timer/count-down-timer.component';
import { TimerComponent } from './resusable-pages/count-down-timer/timer/timer.component';
import { BottomSheetComponent } from './resusable-pages/bottom-sheet/bottom-sheet.component';
import { ContentPageComponent } from './resusable-pages/content-page/content-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BottomSheetComponent,
    CountDownTimerComponent,
    MainPageComponent,
    MainNavigationComponent,
    TimerComponent,
    ClickTriggerDirective,
    ContentPageComponent
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
