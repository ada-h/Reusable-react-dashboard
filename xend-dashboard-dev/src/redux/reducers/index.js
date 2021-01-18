import {combineReducers } from 'redux'
import NavReducer from './nav'
import BreadCrumbs from './breadcrumbs'
import LongCardData from './longCardData'


export default combineReducers ({
    navLinks: NavReducer,
    breadCrumbs: BreadCrumbs,
    LongCardData: LongCardData
})