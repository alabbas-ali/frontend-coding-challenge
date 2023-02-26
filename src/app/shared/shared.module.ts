import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatIconModule } from '@angular/material/icon'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatCardModule } from '@angular/material/card'
import { MatMenuModule } from '@angular/material/menu'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatDividerModule } from '@angular/material/divider'
import { MatToolbarModule } from '@angular/material/toolbar'

import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component'
import { SearchPipe } from './pips/search.pipe'

const MatModules = [
    // Material modules
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatInputModule,
    MatToolbarModule
]

const SharedComponents = [ConfirmModalComponent]

const SharedPips = [SearchPipe]

@NgModule({
    declarations: [
        SharedComponents, //
        SharedPips
    ],
    imports: [
        CommonModule, //
        FormsModule,
        HttpClientModule,

        MatModules
    ],
    exports: [
        CommonModule,
        FormsModule,
        HttpClientModule,

        MatModules,
        SharedComponents,
        SharedPips
    ],
    providers: [],
    entryComponents: []
})
export class SharedModule {}
