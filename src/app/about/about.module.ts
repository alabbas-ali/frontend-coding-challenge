import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common'

import { SharedModule } from '@@shared/shared.module'
import { AboutComponent } from './about.component'

const routes: Routes = [{ path: '', component: AboutComponent }]

@NgModule({
    imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
    declarations: [AboutComponent],
    exports: [],
    entryComponents: [AboutComponent]
})
export class AboutModule {}
