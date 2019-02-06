import {
    CHANGE_ACTIVE
} from './Types'

export const changeActive = (id) => {
    return{
        type: CHANGE_ACTIVE,
        id
    }
}