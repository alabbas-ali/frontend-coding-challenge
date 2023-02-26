import { Action } from '@ngrx/store'
import { Speaker } from '../model/speaker'

export enum SpeakersActionTypes {
    SPEAKERS_LOAD = '[Speakers] Speakers query',
    SPEAKERS_LOADED = '[Speakers] Speakers loaded',
    SPEAKERS_ERROR = '[Speakers] Speakers error'
}

export class SpeakersQuery implements Action {
    readonly type = SpeakersActionTypes.SPEAKERS_LOAD

    constructor(public page: number, public pageSize: number) {}
}

export class SpeakersLoaded implements Action {
    readonly type = SpeakersActionTypes.SPEAKERS_LOADED

    constructor(public list: Array<Speaker>) {}
}

export class SpeakersError implements Action {
    readonly type = SpeakersActionTypes.SPEAKERS_ERROR

    constructor(public error: string) {}
}

export type SpeakersActions = SpeakersQuery | SpeakersLoaded | SpeakersError
