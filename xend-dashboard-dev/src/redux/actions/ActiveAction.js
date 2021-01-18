import {
    CHANGE_ACTIVE
} from './types'

export const changeActive = (id) => {
    return{
        type: CHANGE_ACTIVE,
        id
    }
}