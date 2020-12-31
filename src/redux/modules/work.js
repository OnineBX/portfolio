import {work} from '../../assets/data';

// action types

export const types = {
    LOAD: 'portfolio/work/load'
}

// action creators

export const actions = {
    load: () => (
        {
            type: types.LOAD
        }
    )
}

// selectors
export const getWork = state => state.work;

// reducer

const initialState = {...work};

export default function reducer(state = initialState, action={}){
    switch(action.type){
        case types.LOAD:
            return {...state};
        default:
            return state;
    }
}
