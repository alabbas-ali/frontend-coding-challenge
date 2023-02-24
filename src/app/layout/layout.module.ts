import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from '@@shared/shared.module'

import { AppHeaderComponent } from './header/header.component'
import { AppFooterComponent } from './footer/footer.component'
import { LayoutComponent } from './layout.component'

@NgModule({
    imports: [
        CommonModule, //
        SharedModule
    ],
    declarations: [
        AppHeaderComponent, //
        AppFooterComponent,
        LayoutComponent
    ],
    exports: [LayoutComponent]
})
export class LayoutModule {}
