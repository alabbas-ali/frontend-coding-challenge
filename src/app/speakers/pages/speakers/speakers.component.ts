import { Component, OnInit } from '@angular/core'
import { animate, state, style, transition, trigger } from '@angular/animations'
import { PageEvent } from '@angular/material/paginator'

import { MatDialog } from '@angular/material/dialog'

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
import { SpeakerModalComponent } from '../../components/speaker-modal/speaker-modal.component'

@Component({
    selector: 'app-speakers',
    templateUrl: './speakers.component.html',
    styleUrls: ['./speakers.component.scss'],
    animations: [
        trigger('inOutAnimation', [
            state('in', style({ opacity: 1 })),
            transition(':enter', [style({ opacity: 0 }), animate(1000)]),
            transition(':leave', animate(50, style({ opacity: 0 })))
        ])
    ]
})
export class SpeakersComponent implements OnInit {
    speakers$: Observable<Array<Speaker>> = this.store.select(getSpeakers)
    loading$: Observable<boolean> = this.store.select(getLoaded)

    pageSize = 9
    pageIndex = 0
    pageSizeOptions = [9, 18, 27]
    showFirstLastButtons = true

    searchText = ''

    constructor(
        public dialog: MatDialog,
        private store: Store<SpeakersState>
    ) {}

    ngOnInit() {
        this.store.dispatch(
            new fromSpeakers.SpeakersQuery(this.pageIndex, this.pageSize)
        )

        this.store.select(getError).subscribe((error) => {
            if (error) {
                // TODO: Handle error
            }
        })
    }

    onPaginateChange(event: PageEvent) {
        this.searchText = ''
        this.pageSize = event.pageSize
        this.pageIndex = event.pageIndex
        this.pageIndex = event.pageIndex
        this.store.dispatch(
            new fromSpeakers.SpeakersQuery(this.pageIndex, this.pageSize)
        )
    }

    openViewSpeakerModal(speaker: Speaker) {
        this.dialog.open(SpeakerModalComponent, {
            minWidth: '50%',
            data: { speaker }
        })
    }

    onSpeakerView(emplyee: Speaker) {
        this.openViewSpeakerModal(emplyee)
    }
}
