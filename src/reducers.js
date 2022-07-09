
import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILURE
} from './contants.js';

const initialStateSearch = {
    searchField:''
}

export const searchRobots = (state=initialStateSearch,action={}) =>{
//ez egy reducer, 1 metodus, ami uj state-t gyart a kapott ertekekbol
console.log(action.type);
    switch(action.type){
        //letrehoz 1 uj objektumot, 1.param=target, osszes tobbi a forras objektum amibol masol
        //updateli a state-t 1 darab fielddel, de lehet h a state-ben 1000 van.
        case CHANGE_SEARCH_FIELD: return Object.assign({}, state, {searchField: action.payload});
        default: return state;
    }
}

const initialStateRobots={
    isPending: false,
    robots: [],
    error: ''
}

//create new reducer, be specific to the use case
export const requestRobots=(state=initialStateRobots, action={})=>{
    switch(action.type){
        case REQUEST_ROBOTS_PENDING: return Object.assign({}, state, {isPending: true});
        case REQUEST_ROBOTS_SUCCESS: return Object.assign({}, state, {isPending: false, robots: action.payload});;
        case REQUEST_ROBOTS_FAILURE: return Object.assign({}, state, {isPending: false, error: action.payload});
        default: return state;
    }
}