import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common'

import { SharedModule } from '@@shared/shared.module'
import { PageNotFoundComponent } from './page-not-found.component'

const routes: Routes = [{ path: '', component: PageNotFoundComponent }]

@NgModule({
    imports: [
        CommonModule, //
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [PageNotFoundComponent],
    exports: [],
    entryComponents: [PageNotFoundComponent]
})
export class PageNotFoundModule {}
