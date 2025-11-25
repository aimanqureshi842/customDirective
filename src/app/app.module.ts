import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlighterDirecrtive } from './shared/directive/highlighterDirective';
import { HighLighterDirective2 } from './shared/directive/highLighterCssDirective2';
import { CssDirective } from './shared/directive/cssDirective';
import { CssStyleDirective } from './shared/directive/css-style.directive';
import { CsshighlightDirective } from './shared/directive/csshighlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlighterDirecrtive,
    HighLighterDirective2,
    CssDirective,
    CssStyleDirective,
    CsshighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
