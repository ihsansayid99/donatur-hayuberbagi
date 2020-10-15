import { POPULATE_PROFILE_DONATURS } from 'constant/types/donaturs'

export const populateProfileDonatur = (donatur = {}) => ({
    type: POPULATE_PROFILE_DONATURS,
    payload: donatur
});