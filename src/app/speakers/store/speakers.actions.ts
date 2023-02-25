import { Action } from '@ngrx/store'
import { Speaker } from '../model/speaker'

export enum SpeakersActionTypes {
    SPEAKERS_LOAD = '[Speakers] Speakers query',
    SPEAKERS_LOADED = '[Speakers] Speakers loaded',
    SPEAKERS_ERROR = '[Speakers] Speakers error'
}

export class SpeakersQuery implements Action {
    readonly type = SpeakersActionTypes.SPEAKERS_LOAD
}

export class SpeakersLoaded implements Action {
    readonly type = SpeakersActionTypes.SPEAKERS_LOADED

    constructor(public payload: { list: Array<Speaker> }) {}
}

export class SpeakersError implements Action {
    readonly type = SpeakersActionTypes.SPEAKERS_ERROR

    constructor(public payload: { error: any }) {}
}

export type SpeakersActions = SpeakersQuery | SpeakersLoaded | SpeakersError
