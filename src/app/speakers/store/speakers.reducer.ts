import { SpeakersActions, SpeakersActionTypes } from './speakers.actions'
import { SpeakersInitialState, SpeakersState } from './speakers.state'

export const speakersReducer = (
    state = SpeakersInitialState,
    action: SpeakersActions
): SpeakersState => {
    if (action && action.type) {
        switch (action.type) {
            case SpeakersActionTypes.SPEAKERS_LOAD: {
                return Object.assign({}, state, {
                    loading: true
                })
            }

            case SpeakersActionTypes.SPEAKERS_LOADED: {
                return Object.assign({}, state, {
                    list: action.payload.list,
                    loading: false
                })
            }

            case SpeakersActionTypes.SPEAKERS_ERROR: {
                return Object.assign({}, state, {
                    loading: false,
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    error: action.payload.error
                })
            }

            default:
                return state
        }
    }
    return state
}
