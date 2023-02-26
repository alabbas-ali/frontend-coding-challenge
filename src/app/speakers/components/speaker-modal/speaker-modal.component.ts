import { Component, Inject } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

import { Speaker } from '../../model/speaker'

export interface SpeakerModalData {
    speaker: Speaker
}

@Component({
    selector: 'speaker-modal',
    templateUrl: './speaker-modal.component.html',
    styleUrls: ['./speaker-modal.component.scss']
})
export class SpeakerModalComponent {
    speaker!: Speaker

    constructor(@Inject(MAT_DIALOG_DATA) public data: SpeakerModalData) {
        console.log(data)
        this.speaker = data.speaker
    }
}
