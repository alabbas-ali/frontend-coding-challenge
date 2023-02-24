import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import {
    ButtonsModule,
    InputsModule,
    CardsModule,
    InputUtilitiesModule,
    IconsModule,
    ModalModule,
    WavesModule,
    DropdownModule,
    NavbarModule
} from 'angular-bootstrap-md'

import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component'

const BootstrapModules = [
    ButtonsModule,
    InputsModule,
    CardsModule,
    InputUtilitiesModule,
    IconsModule,
    ModalModule,
    WavesModule,
    NavbarModule,
    DropdownModule
]

@NgModule({
    declarations: [ConfirmModalComponent],
    imports: [CommonModule, FormsModule, HttpClientModule, BootstrapModules],
    exports: [
        ConfirmModalComponent,
        CommonModule,
        FormsModule,
        HttpClientModule,

        BootstrapModules
    ],
    providers: [],
    entryComponents: []
})
export class SharedModule {}
