import { Component, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'
import { MDBModalRef } from 'angular-bootstrap-md'
import { Subject } from 'rxjs'

import { Speaker } from '../../model/speaker'

@Component({
    selector: 'speaker-modal',
    templateUrl: './speaker-modal.component.html',
    styleUrls: ['./speaker-modal.component.scss']
})
export class SpeakerModalComponent {
    @ViewChild('speakerForm', { static: true }) speakerForm!: NgForm

    heading!: string
    speakerData: Subject<Speaker> = new Subject()
    speaker: Speaker = {} as Speaker

    constructor(public modalRef: MDBModalRef) {}

    onSave() {
        if (this.speakerForm.valid) {
            this.speakerData.next(this.speaker)
            this.modalRef.hide()
        } else {
            const controls = this.speakerForm.controls
            Object.keys(controls).forEach((controlName) =>
                controls[controlName].markAsTouched()
            )
        }
    }
}
