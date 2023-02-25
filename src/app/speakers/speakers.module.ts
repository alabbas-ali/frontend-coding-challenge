import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common'

import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'

import { SharedModule } from '@@shared/shared.module'
import { LayoutModule } from '@@layout/layout.module'

import { SpeakerCardComponent } from './components/speaker-card/speaker-card.component'
import { SpeakerModalComponent } from './components/speaker-modal/speaker-modal.component'
import { SpeakersComponent } from './pages/speakers/speakers.component'

import { SpeakersEffects } from './store/speakers.effects'
import * as fromSpeakers from './store/speakers.reducer'

const routes: Routes = [{ path: '', component: SpeakersComponent }]

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        LayoutModule,
        RouterModule.forChild(routes),

        StoreModule.forFeature('speakers', fromSpeakers.speakersReducer),
        EffectsModule.forFeature([SpeakersEffects])
    ],
    declarations: [
        SpeakerCardComponent, //
        SpeakerModalComponent,
        SpeakersComponent
    ],
    exports: [],
    entryComponents: [SpeakersComponent]
})
export class SpeakersModule {}
