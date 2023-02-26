import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from '@@shared/shared.module'

import { AppHeaderComponent } from './header/header.component'
import { AppFooterComponent } from './footer/footer.component'
import { LayoutComponent } from './layout.component'
import { RouterModule } from '@angular/router'

@NgModule({
    imports: [
        CommonModule, //
        SharedModule,
        RouterModule
    ],
    declarations: [
        AppHeaderComponent, //
        AppFooterComponent,
        LayoutComponent
    ],
    exports: [LayoutComponent]
})
export class LayoutModule {}
