import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { EMPTY } from 'rxjs'
import { map, mergeMap, catchError } from 'rxjs/operators'
import { Store } from '@ngrx/store'

import { SpeakerService } from '../services/speaker.service'

import { SpeakersActionTypes } from './speakers.actions'
import * as fromSpeakers from './speakers.actions'
import { SpeakersState } from './speakers.state'

@Injectable()
export class SpeakersEffects {
    query$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SpeakersActionTypes.SPEAKERS_LOAD),
            mergeMap((action: fromSpeakers.SpeakersQuery) =>
                this.speakerService
                    .getSpeakers(action.page, action.pageSize)
                    .pipe(
                        map(
                            (speakers) =>
                                new fromSpeakers.SpeakersLoaded(speakers)
                        ),
                        catchError((error) => {
                            this.store.dispatch(
                                new fromSpeakers.SpeakersError(
                                    `Error in retrieving Speakers ${error.message}`
                                )
                            )
                            return EMPTY
                        })
                    )
            )
        )
    )

    constructor(
        private actions$: Actions,
        private store: Store<SpeakersState>,
        private speakerService: SpeakerService
    ) {}
}
