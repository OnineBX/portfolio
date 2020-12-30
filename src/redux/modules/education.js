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

const initialState = {
    history: [
        {
            title: 'Harbin Institute of Technology',
            text: '1998 ~ 2002\n\nBachelor of Mechanical Engineering\n\n2002 ~ 2005\n\nMaster of Computer Science and Technology',
            icon: '/images/logo_hit.png'
        },

        {
            title: 'Southern Institute of Technology',
            text: "2019\n\nEnglish course\n\n2020\n\nGraduate Diploma in Information Technology",
            icon: '/images/logo_sit.png'
        }
    ],
    award: [
        {
            title: 'Jensen Tech Award - Top Network Student',
            image: '/images/jensen-tech.jpg',
            link:''

        },
        {
            title: 'Microsoft Certified Professional Developer',
            image: '/images/mcpd.jpg'
        }
    ]
    
}

export default function reducer(state = initialState, action={}){
    switch(action.type){
        case types.LOAD:
            return {...state};
        default:
            return state;
    }
}

