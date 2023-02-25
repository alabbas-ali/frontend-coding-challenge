import { emptySpeakersList } from '../model/empty-speakers'
import { Speaker } from '../model/speaker'

export interface SpeakersState {
    list: Array<Speaker>
    loading: boolean
    error: any
}

export const SpeakersInitialState: SpeakersState = {
    list: emptySpeakersList,
    loading: true,
    error: null
}
