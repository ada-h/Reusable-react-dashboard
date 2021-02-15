import {combineReducers } from 'redux'
import NavReducer from './nav'
import BreadCrumbs from './breadcrumbs'
import LongCardData from './longCardData'
import error from './error';
import auth from './auth';


export default combineReducers ({
    auth,
    error,
    navLinks: NavReducer,
    breadCrumbs: BreadCrumbs,
    LongCardData: LongCardData
})