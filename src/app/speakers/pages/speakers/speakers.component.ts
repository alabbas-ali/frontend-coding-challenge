/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Component, OnInit } from '@angular/core'
import { animate, state, style, transition, trigger } from '@angular/animations'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { Speaker } from '../../model/speaker'
import {
    getLoaded,
    getSpeakers,
    getError
} from '../../store/speakers.selectors'
import * as fromSpeakers from '../../store/speakers.actions'

import { SpeakersState } from '../../store/speakers.state'

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
    speakers$: Observable<Array<Speaker>> = this.store.select(getSpeakers)
    loading$: Observable<boolean> = this.store.select(getLoaded)

    constructor(private store: Store<SpeakersState>) {}

    ngOnInit() {
        this.store.dispatch(new fromSpeakers.SpeakersQuery())

        this.store.select(getError).subscribe((error) => {
            if (error) {
            }
        })
    }

    openViewSpeakerModal(speaker: Speaker) {
        console.log(speaker)
    }

    onSpeakerView(emplyee: Speaker) {
        this.openViewSpeakerModal(emplyee)
    }
}
