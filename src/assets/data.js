
// home
export const home = {
    profilePic: '/images/profile.png',
    profileName: 'Ryan',
    social: [
        {
            icon: 'fas fa-envelope',
            content: 'hitxcl@gmail.com',
            url:'mailto:hitxcl@gmail.com'
        },
        {
            icon: 'fas fa-phone',
            content: '21-08752367',
            url:'tel: 02108752367'
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
    content: '<p>My career life is 100% driven by my enthusiasm for thinking and programing. By far, I have worked as programer for around 10 years, from startups to big firms. The Internet boom offers me lots of unprecedented opportunities to access to diverse novel techniques. </p>For the first three years, I\'ve worked for a startup and complete some web-based application for petrochemical industry. After that, I started to serve some Internet-based companies to implement mobile apps. During this period, I not only gained experiences in technique, but also learn how to do well in teamwork and know what I\'m going to be.<p>.In the following years, I plan to connect all the experience \" points\" to be a better-rounded full-stack dev.</p> <b>ps: also a runner & two kids\' father~</b>',
    image: '/images/about.jpg'
}

// skills
export const skills = [
    {
        title: 'Professional Skills',
        content: '<p>I have around 2-year experience in back-end development with ASP.Net or Java Web. Then I\'ve engaged in development based on Android platform all along so that I\'m quite experienced in Java programing. With the hybrid apps becoming the predominant trend, I started to dig in front-end technology stack and program with React in projects. Python is like a bonus when I\'m required to dispose the raw data in an indoor positioning project.</p><p>Many years of programming experience lets me know the important thing is not remerbering all the technical details used in projects, but understanding the critical thinking and applying the right technologies as needed.</p><p>The following marks are valued by myself based on my project experience and could be used as reference.</p>',
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
                },
                {
                    title: 'Html/CSS/Javascript',
                    icon: 'fab fa-js',
                    percent: '60%'
                },
                {
                    title: 'Python',
                    icon: 'fab fa-python',
                    percent: '60%'
                }
            ]
        }
    },
    {
        title: 'English Skills',
        content: 'As an international job applicant, I\'ve spent much time in learning English. However, speaking and listening are still my weaknesses. The following marks are from the latest PTE test which could be exactly used as an \"official" reference. Trust me, I do better in normal conversation now~',
        radar: {
            title: 'Communicative Skills',
            captions: {
                // columns
                speaking: 'speaking',
                listening: 'listening',
                reading: 'reading',
                writing: 'writing',
                grammar: 'grammar',
                vocabulary: 'vocabulary',
                
            },
            details:[
                {
                  data: {
                    speaking: .45,
                    listening: .59,
                    reading: .62,
                    writing: .8,
                    grammar: .90,
                    vocabulary: .73,
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
                },
                {
                    title: 'ritten Discourse',
                    icon: 'fab fa-weebly',
                    percent: '90%'
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
            title: 'Junior Developer',
            time: '2010',
            tags: ['C#', 'Asp.Net', 'Java', 'Android'],
            content: [
                {
                    company: 'Some Startup Companies',
                    icon: '/images/logo_hit.png',
                    text: 'I completed some projects, most of which are web-based. Ordering System for restaurants led me to start android app development.',
                    projects:[
                        {
                            icon:'fab fa-github',
                            title: 'Material MIS',
                            link: 'https://github.com/OnineBX/Material-MIS'
                        },
                        {
                            title: 'Ordering System',
                            icon:'fab fa-github',
                            link: 'https://github.com/OnineBX/Ordering-System'
                        },
                    ]
                }
            ]
            
        },
        {
            title: 'Senior Android Developer',
            time: '2013',
            tags: ['Android', 'Java'],
            content:[
                {
                    company: 'CYOU Ltd.',
                    icon: '/images/logo_hit.png',
                    text: 'I worked for the C-Launcher team as one of the chief programmers. C-Launcher is still alive in Google Play as the following button could let you go~',
                    projects:[
                        {
                            icon:'fab fa-google-play',
                            title: 'C-Launcher',
                            link: 'https://play.google.com/store/apps/details?id=com.cma.launcher.lite'
                        }
                    ]
                }
            ]
        },
        {
            title: 'Senior Developer',
            time: '2015',
            tags: ['Java', 'Android', 'React', 'Python', 'Node.js', 'Gradle'],
            content:[
                {
                    company: 'Wanda Group.',
                    icon: '/images/work-wanda.png',
                    text:'I gained the opportunities to using react, python as well as Java to develop ffan app(hybrid app, an O2O platform being active from 2015 to 2018) (｡•́︿•̀｡)',
                    projects:[
                        {
                            title:'ffan series projects',
                            icon: 'fab fa-github',
                            link: 'https://github.com/ffan-story'
                        },
                        {
                            title:'Seed series projects',
                            icon: 'fab fa-github',
                            link: 'https://github.com/seedland-inf'

                        }
                    ]
                },
                // {
                //     company: 'Watsons Group.',
                //     icon: '/images/work-watsons.png',
                //     text:'Watsons app is still running in markets. I developed global shopping module',
                //     projects:[
                //         {
                //             title: 'Watsons series app',
                //             icon: 'fab fa-google-play',
                //             link: 'https://play.google.com/store/search?q=watsons'
                //         }
                //     ]
                // },
                // {
                //     company: 'Seedland Group.',
                //     text: 'I\'m in charge of shell tree app project. My work includes designing Restful APIs, implementing its Android edition and build up the official SDKs for other teams.',
                //     projects:[
                //         {
                //             title:'Seed series projects',
                //             icon: 'fab fa-github',
                //             link: 'https://github.com/seedland-inf'

                //         },
                //     ]
                // }
            ]   
            
        },
        {
            title: 'Volunteer & Student',
            time:'2019',
            tags:['C#', 'Asp.Net Core', 'MySQL', 'Java', 'MongoDB', 'Python'],
            content:[
                {
                    company: 'Aurora College',
                    icon: '/images/work-aurora.png',
                    text:'Volunteer, assist in Code Dojo course for teenagers'
                },
                {
                    company: 'Ceroc',
                    text:'Graduate Diploma final year project ~ MyCeroc. ',
                    projects:[
                        {
                            title:'MyCeroc',
                            icon: 'fab fa-github',
                            link: 'https://github.com/myceroc'
                        },
                        
                    ]
                },
                {
                    company: 'Ohters',
                    text: 'Meanwhile, I worked out a solution to dealing with data of Pump Diagnosis from multi enterprises. My portfolio website as well~',
                    projects:[
                        {
                            title: 'Pump Diagnosis',
                            link: 'https://github.com/Diagnosis-Solution',
                            icon: 'fab fa-github',
                        },
                        {
                            title: 'Ryan Portfolio',
                            link: 'https://github.com/OnineBX/portfolio',
                            icon: 'fab fa-github'
                        }
                    ]
                }
            ]
            
        },
    ]
}