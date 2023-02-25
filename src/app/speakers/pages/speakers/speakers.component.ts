/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Component, OnInit } from '@angular/core'
import { animate, state, style, transition, trigger } from '@angular/animations'
import { Store } from '@ngrx/store'
import { MDBModalService, MDBModalRef } from 'angular-bootstrap-md'
import { take } from 'rxjs/operators'
import { Observable } from 'rxjs'

import { ConfirmModalComponent } from '@@shared/components/confirm-modal/confirm-modal.component'

import { Speaker } from '../../model/speaker'
import {
    getAllLoaded,
    getSpeakers,
    getError
} from '../../store/speakers.selectors'
import * as fromSpeakers from '../../store/speakers.actions'
import { SpeakerModalComponent } from '../../components/speaker-modal/speaker-modal.component'
import { SpeakersState } from '../../store/speakers.state'
import { emptySpeakersList } from '../../model/empty-speakers'

@Component({
    selector: 'app-speakers',
    templateUrl: './speakers.component.html',
    styleUrls: ['./speakers.component.scss'],
    animations: [
        trigger('inOutAnimation', [
            state('in', style({ opacity: 1 })),
            transition(':enter', [style({ opacity: 0 }), animate(800)]),
            transition(':leave', animate(50, style({ opacity: 0 })))
        ])
    ]
})
export class SpeakersComponent implements OnInit {
    speakers$!: Observable<Array<Speaker> | null>
    loading = true
    modalRef!: MDBModalRef

    emptyState = emptySpeakersList

    constructor(
        private store: Store<SpeakersState>,
        private modalService: MDBModalService
    ) {}

    ngOnInit() {
        this.store.dispatch(new fromSpeakers.SpeakersQuery())

        this.store.select(getAllLoaded).subscribe((loading) => {
            if (this.loading !== loading) {
                this.loading = loading
            }
        })

        this.store.select(getError).subscribe((error) => {
            if (error) {
                this.modalRef = this.modalService.show(ConfirmModalComponent, {
                    class: 'modal-dialog modal-notify modal-danger modal-side modal-top-right'
                })
                this.modalRef.content.heading = 'Error happen'
                this.modalRef.content.content = error
            }
        })

        this.speakers$ = this.store.select(getSpeakers)
    }

    openViewSpeakerModal(speaker: Speaker) {
        this.modalRef = this.modalService.show(SpeakerModalComponent, {
            class: 'modal-full-height modal-right modal-notify modal-info'
        })
        this.modalRef.content.heading = 'Edit Speaker'
        this.modalRef.content.speaker = { ...speaker }
        this.modalRef.content.speakerData
            .pipe(take(1))
            .subscribe((speakerData: Speaker) => {
                this.store.dispatch(
                    new fromSpeakers.SpeakerSave({ speaker: speakerData })
                )
            })
    }

    onSpeakerView(emplyee: Speaker) {
        this.openViewSpeakerModal(emplyee)
    }
}
