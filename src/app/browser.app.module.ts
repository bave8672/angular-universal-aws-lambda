import { NgModule } from '@angular/core';
import { AppModule, APP_ID } from './app.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        AppModule,
        BrowserModule.withServerTransition({
            appId: APP_ID
        })
    ],
    bootstrap: [AppComponent]
})
export class BrowserAppModule {}
