
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

const initialState = {
    // about: {
        //         history: [
        //     {
        //         city:'Guangzhou',
        //         period: '2006.2 ~ 2010.5',
        //         brief:'',
        //         photo:''
        //     },
        //     {
        //         city: 'Chengdu',
        //         period: '2010.5 ~ 2011.5',
        //         brief:'',
        //         photo:'',
        //     },
        //     {
        //         city: 'Shenzhen',
        //         period: '2011.8 ~ 2012.12',
        //         brief:'',
        //         photo:''
        //     },
        //     {
        //         city: 'Beijing',
        //         period: '2013.2 ~ 2017.2',
        //         brief:'',
        //         photo:''
        //     },
        //     {
        //         city: 'Guangzhou',
        //         period: '2017.4 ~ 2019.2',
        //         brief:'',
        //         photo:''
        //     },
        //     {
        //         city: 'Invercargill',
        //         period: '2019.2 ~ 2020.11',
        //         brief: '',
        //         photo:''
        //     },
        //     {
        //         city: 'Auckland',
        //         period: '2020.11 ~ now',
        //         brief: '',
        //         photo: ''
        //     }
        // ]
    // }
    
};

export default function reducer(state = initialState, action={}) {
    switch(action.type) {
        case types.LOAD:
            // read about content from data.json
            return Object.assign({}, state, {
                subtitle:'I\'m Ryan',
                content: 'I\'ve been an software engineer since 2010.' + 
                         'In my spare time, I like hiking and jogging.'
            });
            // return {...state, content: 'who am I'};
        default:
            return state;
    }
}