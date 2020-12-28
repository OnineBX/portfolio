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

const initialState = {
    profilePic: '/images/profile.png',
    profileName: 'Ryan',
    social: [
        {
            icon: 'fas fa-envelope',
            content: 'hitxcl@gmail.com'
        },
        {
            icon: 'fas fa-phone',
            content: '21-08752367'
        },
        {
            icon: 'fab fa-linkedin-in',
            content: 'Ryan Xu',
            url: 'https://www.linkedin.com/in/ryan-xu-978b29104/'
        },
        {
            icon: 'fab fa-github',
            content: 'OnineBX',
            url: 'https://github.com/OnineBX'
        }
    ]
}

export default function reducer(state = initialState, action = {}) {
    switch(action.type) {
        case types.LOAD:
            return {...state};
        default:
            return state;
    }
}