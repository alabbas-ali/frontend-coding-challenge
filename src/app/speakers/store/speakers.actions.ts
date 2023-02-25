import { Action } from '@ngrx/store'
import { Speaker } from '../model/speaker'

export enum SpeakersActionTypes {
    EMPLOYEES_QUERY = '[Speakers] Speakers query',
    EMPLOYEES_LOADED = '[Speakers] Speakers loaded',
    EMPLOYEE_SAVE = '[Speakers] Speaker save',
    EMPLOYEE_SAVED = '[Speakers] Speaker saved',
    EMPLOYEE_DELETE = '[Speakers] Speaker delete',
    EMPLOYEE_DELETED = '[Speakers] Speaker deleted',
    EMPLOYEES_ERROR = '[Speakers] Speakers error'
}

export class SpeakersQuery implements Action {
    readonly type = SpeakersActionTypes.EMPLOYEES_QUERY
}

export class SpeakersLoaded implements Action {
    readonly type = SpeakersActionTypes.EMPLOYEES_LOADED

    constructor(public payload: { list: Array<Speaker> }) {}
}

export class SpeakerSave implements Action {
    readonly type = SpeakersActionTypes.EMPLOYEE_SAVE

    constructor(public payload: { speaker: Speaker }) {}
}

export class SpeakerSaved implements Action {
    readonly type = SpeakersActionTypes.EMPLOYEE_SAVED

    constructor(public payload: { speaker: Speaker }) {}
}

export class SpeakerDelete implements Action {
    readonly type = SpeakersActionTypes.EMPLOYEE_DELETE

    constructor(public payload: { speaker: Speaker }) {}
}
export class SpeakerDeleted implements Action {
    readonly type = SpeakersActionTypes.EMPLOYEE_DELETED

    constructor(public payload: { speaker: Speaker }) {}
}

export class SpeakersError implements Action {
    readonly type = SpeakersActionTypes.EMPLOYEES_ERROR

    constructor(public payload: { error: any }) {}
}

export type SpeakersActions =
    | SpeakersQuery
    | SpeakersLoaded
    | SpeakerSave
    | SpeakerSaved
    | SpeakerDelete
    | SpeakerDeleted
    | SpeakersError
