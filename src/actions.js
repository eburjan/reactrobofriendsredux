
import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILURE
} from './contants.js';

/*
//automatic return :
export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD, //action type , neve
    payload: text //what user inputs
})
*/

//non automatic return, parameter lista meg kell egyezzen az event handler szuksegleteivel
export const setSearchField = (text) => {
    console.log(text);
    return {
        type: CHANGE_SEARCH_FIELD, //action type , neve
        payload: text //what user inputs
    }
}

//actionoket fog inditani
export const doRequestRobots=()=>(dispatch)=>{
    dispatch({type: REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>
        {
            return response.json();
        })
        .then(users=>{
            //return this.setState({robots: users});//updateli a state obj robots reszet.
            return dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: users})
        })
        .catch(error=>dispatch({type: REQUEST_ROBOTS_FAILURE, payload: error}));
}
