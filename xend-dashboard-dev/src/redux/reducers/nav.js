import {
    CHANGE_ACTIVE
} from '../actions/types'

const initialState = {
    active: false,
    id: 1,
    navList: [
        {
            id: 1,
            title: 'Dashboard',
            link: '',
            icon: 'edit',
        },
        {
            id: 2,
            title: 'Blog Posts',
            link: 'posts',
            icon: 'vertical_split',
        },
        {
            id: 3,
            title: 'Add New Post',
            link: 'addPost',
            icon: 'note_add'
        },
        {
            id: 4,
            title: 'Forms & Components',
            link: 'forms',
            icon: 'view_module'
        },
        {
            id: 5,
            title: 'Tables',
            link: 'tables',
            icon: 'table_chart'
        },
        {
            id: 6,
            title: 'User Profile',
            link: 'user_profile',
            icon: 'person'
        },
    ]
}

const NavReducer = (state = initialState, action) =>{
    if (action.type === CHANGE_ACTIVE){
        let active = true
        let id = action.id
        return{
            ...state,
            active,
            id
        }
    }
    return state
}

export default NavReducer