import { SpeakersActions, SpeakersActionTypes } from './speakers.actions'
import { SpeakersInitialState, SpeakersState } from './speakers.state'

export const speakersReducer = (
    state = SpeakersInitialState,
    action: SpeakersActions
): SpeakersState => {
    if (action && action.type) {
        switch (action.type) {
            case SpeakersActionTypes.EMPLOYEES_QUERY: {
                return Object.assign({}, state, {
                    loading: true
                })
            }

            case SpeakersActionTypes.EMPLOYEES_LOADED: {
                return Object.assign({}, state, {
                    list: action.payload.list,
                    loading: false
                })
            }

            case SpeakersActionTypes.EMPLOYEE_SAVED: {
                let newlist = state.list.map((item) => Object.assign({}, item))

                if (
                    newlist.filter((it) => it.id === action.payload.speaker.id)
                        .length > 0
                ) {
                    newlist = newlist.map((it) => {
                        if (it.id === action.payload.speaker.id) {
                            return action.payload.speaker
                        } else {
                            return it
                        }
                    })
                } else {
                    newlist.push(action.payload.speaker)
                }

                return Object.assign({}, state, {
                    list: newlist,
                    loading: false
                })
            }

            case SpeakersActionTypes.EMPLOYEE_DELETED: {
                return Object.assign({}, state, {
                    list: state.list.filter(
                        (it) => it.id !== action.payload.speaker.id
                    ),
                    loading: false
                })
            }

            case SpeakersActionTypes.EMPLOYEES_ERROR: {
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
