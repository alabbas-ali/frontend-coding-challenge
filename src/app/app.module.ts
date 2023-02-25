import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { SharedModule } from '@@shared/shared.module'

import { AppComponent } from './app.component'

import { environment } from '../environments/environment'
import { reducers } from './reducers'

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./speakers/speakers.module').then((a) => a.SpeakersModule)
    },
    {
        path: 'about',
        loadComponent: () =>
            import('./about/about.component').then((a) => a.AboutComponent)
    },
    {
        path: '**',
        loadChildren: () =>
            import('./page-not-found/page-not-found.component').then(
                (a) => a.PageNotFoundComponent
            )
    }
]

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        StoreModule.forRoot(reducers, {
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true
            }
        }),
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
        !environment.production
            ? StoreDevtoolsModule.instrument({
                  name: 'Frontend Coding Challenge',
                  maxAge: 50,
                  logOnly: environment.production
              })
            : [],
        EffectsModule.forRoot([]),
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
