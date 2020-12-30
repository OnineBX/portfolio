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

const initialState = {
    data: [
        {
            title: 'Volunteer',
            company: 'Aurora College',
            time:'2020',
            text:'Assist in Code Dojo course for teenagers'
        },
        {
            title: 'Junior Developer',
            company: 'Some Startup Companies',
            time: '2010',
            icon: '/images/logo_hit.png',
            text: 'C# ASP.NET SqlServer Linq Sharepoint, Android',
            projects:[
                {
                    icon:'bx bxl-github',
                    title: 'Material MIS',
                    link: 'www.github.com'
                },
                {
                    title: 'Ordering System',
                    link: 'www.github.com'
                },
            ]
        },
        {
            title: 'Senior Developer',
            company: 'CYOU',
            time: '2013',
            icon: '/images/logo_hit.png',
            text: '1998 ~ 2002\n\nBachelor of Mechanical Engineering\n\n2002 ~ 2005\n\nMaster of Computer Science and Technology',
            projects:[
                {
                    icon:'bx bxl-play-store',
                    title: 'C-Launcher',
                    link: 'www.baidu.com'
                }
            ]
        },

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
