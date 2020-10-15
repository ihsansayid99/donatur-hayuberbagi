import { POPULATE_PROFILE_DONATURS } from 'constant/types/donaturs'

const initialState = null;

export default function (state = initialState, action) {
    switch (action.type) {
        case POPULATE_PROFILE_DONATURS:

            return (action.payload)

        default:
            return state;
    }
}