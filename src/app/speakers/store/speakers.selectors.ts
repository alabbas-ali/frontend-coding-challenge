import { createSelector, createFeatureSelector } from '@ngrx/store'
import { Speaker } from '../model/speaker'
import { SpeakersState } from './speakers.state'

export const getSpeakersState = createFeatureSelector<SpeakersState>('speakers')

export const getSpeakers = createSelector(
    getSpeakersState,
    (speakers: SpeakersState): Array<Speaker> => speakers.list
)

export const getLoaded = createSelector(
    getSpeakersState,
    (speakers: SpeakersState): boolean => speakers.loading
)

export const getError = createSelector(
    getSpeakersState,
    (speakers: SpeakersState): string | undefined => speakers.error
)
