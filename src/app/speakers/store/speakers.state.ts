import { Speaker } from '../model/speaker'

export interface SpeakersState {
    list: Array<Speaker>
    loading: boolean
    error: any
}

export const SpeakersInitialState: SpeakersState = {
    list: [],
    loading: true,
    error: null
}
