
// home
export const home = {
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

// about
export const about = {
    subtitle:'I\'m Ryan',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    image: '/images/about.jpg'
}

// skills
export const skills = [
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
                },
                {
                    title: 'C#',
                    icon: 'fab fa-microsoft',
                    percent: '70%'
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

// education
export const education = {
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

// work
export const work = {
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