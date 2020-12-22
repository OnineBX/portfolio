// action types

export const types = {
    OPEN: 'portfolio/header/open',
    CLOSE: 'portfolio/header/close',
    SELECT: 'portfolio/header/select'
}

// action creators

export const actions = {
    openMenu: () => ({
        type: types.OPEN
    }),
    closeMenu: () => ({
        type: types.CLOSE
    }),
    selectItem: (index) => ({
        type: types.SELECT,
        currentIndex: index
    })
}

// selectors

export const getOpenFlag = state => state.header.isOpen;
export const getSelectedIndex = state => state.header.selectedIndex;

// reducer

const initialState = {
    isOpen: false,
    selectedIndex: '#home'
}

export default function reducer(state = initialState, action = {}) {
    switch(action.type) {
        case types.OPEN:
            return {...state, isOpen: true};
        case types.CLOSE:
            return {...state, isOpen: false};
        case types.SELECT:
            return {...state, selectedIndex: action.currentIndex, isOpen: false }
        default:
            return state;
    }
}