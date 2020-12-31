import {education} from '../../assets/data';

// action types

export const types = {
    LOAD: 'portfolio/education/load'
}

// action crators

export const actions = {
    load: () => ({
        type: types.LOAD
    })
}

// selectors

export const getEducation = state => state.education;

// reducer

const initialState = {...education};

export default function reducer(state = initialState, action={}){
    switch(action.type){
        case types.LOAD:
            return {...state};
        default:
            return state;
    }
}

