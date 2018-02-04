import { NgModule } from '@angular/core';
import { AppModule, APP_ID } from './app.module';
import { BrowserModule } from '@angular/platform-browser';
import { ServerModule } from '@angular/platform-server';
import { AppComponent } from './app.component';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

@NgModule({
    imports: [
        AppModule,
        ServerModule,
        ModuleMapLoaderModule,
        BrowserModule.withServerTransition({
            appId: APP_ID
        })
    ],
    bootstrap: [AppComponent],
})
export class ServerAppModule {}
