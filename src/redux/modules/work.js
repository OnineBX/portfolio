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
            title: 'Junior Developer',
            company: 'Startup Company',
            time: '2010 - 2012',
            icon: '/images/logo_hit.png',
            text: 'C# ASP.NET SqlServer Linq Sharepoint, Android',
            projects:[
                {
                    icon:'',
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
            time: '2013 - 2015',
            icon: '/images/logo_hit.png',
            text: '1998 ~ 2002\n\nBachelor of Mechanical Engineering\n\n2002 ~ 2005\n\nMaster of Computer Science and Technology',
            projects:[
                {
                    icon:'',
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
