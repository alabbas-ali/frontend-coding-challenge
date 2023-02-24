import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { ModalModule } from 'angular-bootstrap-md'

import { SharedModule } from '@@shared/shared.module'

import { AppComponent } from './app.component'

import { environment } from '../environments/environment'
import { reducers } from './reducers'

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./employee/employee.module').then((a) => a.EmployeeModule)
    },
    {
        path: 'about',
        loadChildren: () =>
            import('./about/about.module').then((a) => a.AboutModule)
    },
    {
        path: '**',
        loadChildren: () =>
            import('./page-not-found/page-not-found.module').then(
                (a) => a.PageNotFoundModule
            )
    }
]

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ModalModule.forRoot(),
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
