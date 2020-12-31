import {home} from '../../assets/data';

// action type

export const types = {
    LOAD: 'portfolio/home/load'
}

// action creators

export const actions = {
    load: () => ({
        type: types.LOAD
    })
}

// selectors

export const getHome = state => state.home;

// reducer

const initialState = {...home};

export default function reducer(state = initialState, action = {}) {
    switch(action.type) {
        case types.LOAD:
            return {...state};
        default:
            return state;
    }
}