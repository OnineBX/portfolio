import {skills} from '../../assets/data';
// action types

export const types = {
    LOAD: 'portfolio/skills/load'
}

// action creators

export const actions = {
    load: () => ({
        type: types.LOAD
    })
}

// selectors
export const getSkills = state => state.skills;
// reducer

const initialState = [...skills];

export default function reducer(state = initialState, action = {}) {
    switch(action.type) {
        case types.LOAD:
            return {...state};
        default:
            return state;
    }
}