import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DMTextComponent} from './components/dmtext/dmtext.component';
import {DMGiftComponent} from './components/dmgift/dmgift.component';
import {RecvComponent} from './components/recv/recv.component';
import {MsgDirective} from './msg.directive';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DMTextComponent,
    DMGiftComponent,
    RecvComponent,
    MsgDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RecvComponent]

})
export class AppModule { }
