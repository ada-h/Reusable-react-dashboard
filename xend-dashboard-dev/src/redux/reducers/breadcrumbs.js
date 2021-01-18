const initialState  = [
    {
        id: 1,
        page_subtitle: 'Dashboard',
        page_title: 'Blog Overview'
    },
    {
        id: 2,
        page_subtitle: 'Components',
        page_title: 'Blog Posts'
    },
    {
        id: 3,
        page_subtitle: 'Blog Posts',
        page_title: 'Add New Posts'
    },
    {
        id: 4,
        page_subtitle: 'Overview',
        page_title: 'Forms & Components'
    },
    {
        id: 5,
        page_subtitle: 'Overview',
        page_title: 'Data Tables'
    },
    {
        id: 6,
        page_subtitle: 'Overview',
        page_title: 'User Profile'
    },
    
]

const BreadCrumbs = (state = initialState, action) => {
    return(
        state
    )
}

export default BreadCrumbs