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

const initialState = [
    {
        title: 'Professional Skills',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit optio id vero amet, alias architecto consectetur error eum eaque sit.',
        radar: {
            title: 'Full Stack Ability',
            captions: {
                // columns
                android: 'Android',
                backEnd: 'Back End',
                iOS: 'iOS',
                uiue: 'UI/UE',
                devops: 'DevOps',
                frontEnd: 'Front End',
                
            },
            details:[
                {
                  data: {
                    android: .9,
                    backEnd: .7,
                    iOS: .3,
                    uiue: .3,
                    devops: .6,
                    frontEnd: .7,
                    
                  },
                  meta: { color: 'blue' }
                }
            ],
            options: {
                scales:5
            }
        },
        bar: {
            title: 'Programing Language',
            details: [
                {
                    title: 'Java',
                    icon: 'fab fa-java',
                    percent: '90%'
                }
            ]
        }
    },
    {
        title: 'English Skills',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit optio id vero amet, alias architecto consectetur error eum eaque sit.',
        radar: {
            title: 'Communicative Skills',
            captions: {
                // columns
                gv: 'grammar/vocabulary',
                speaking: 'speaking',
                listening: 'listening',
                reading: 'reading',
                writing: 'writing',
                
            },
            details:[
                {
                  data: {
                    gv: .82,
                    speaking: .45,
                    listening: .59,
                    reading: .62,
                    writing: .8,
                    
                  },
                  meta: { color: 'blue' }
                }
            ],
            options: {
                scales:5
            }
        },
        bar: {
            title:'Enabling Skills',
            details: [
                {
                    title: 'ral fluency',
                    icon: 'far fa-circle',
                    percent: '46%'
                },
                {
                    title: 'rononciation',
                    icon: 'fab fa-pinterest-p',
                    percent: '18%'
                },
                {
                    title: 'pelling',
                    icon: 'fab fa-stripe-s',
                    percent:'78%'
                }
            ]
        }  
    }
]

export default function reducer(state = initialState, action = {}) {
    switch(action.type) {
        case types.LOAD:
            return {...state};
        default:
            return state;
    }
}