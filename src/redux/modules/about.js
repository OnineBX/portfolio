import {about} from '../../assets/data';


// action types
export const types = {
    LOAD: 'portfolio/about/load'

}

// action creators
export const actions = {
    load: () => ({
        type: types.LOAD
    })
}

// selectors
export const getAbout = state => state.about;

const initialState = {...about};

export default function reducer(state = initialState, action={}) {
    switch(action.type) {
        case types.LOAD:
            return Object.assign({}, state, {});
        default:
            return state;
    }
}