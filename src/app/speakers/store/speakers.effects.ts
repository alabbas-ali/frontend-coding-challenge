import { Injectable } from '@angular/core'

import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, switchMap } from 'rxjs/operators'
import { EMPTY } from 'rxjs'
import { Store } from '@ngrx/store'

import { SpeakerService } from '../services/speaker.service'

import { SpeakersActionTypes } from './speakers.actions'
import * as fromSpeakers from './speakers.actions'
import { SpeakersState } from './speakers.state'

@Injectable()
export class SpeakersEffects {
    // query$ = createEffect(() => this.actions$.pipe(
    //     ofType(SpeakersActionTypes.EMPLOYEES_QUERY),
    //     switchMap(() => this.speakerService
    //         .getAll()
    //         .pipe(
    //             map(speakers => (new fromSpeakers.SpeakersLoaded({ list: speakers }))),
    //             catchError(error => {
    //                 this.store.dispatch(new fromSpeakers.SpeakersError({ error: `Error in retrieving Speakers ${error.message}` }))
    //                 return EMPTY
    //             })
    //         )),
    // ))

    constructor(
        private actions$: Actions,
        private store: Store<SpeakersState>,
        private speakerService: SpeakerService
    ) {
        console.log('SpeakersEffects constructor', this.actions$)
    }
}
