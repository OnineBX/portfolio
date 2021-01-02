
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
    content: '<p>My career life is 100% driven by my enthusiasm for thinking and programing. Since 2010, I have accumulated more than 10 years of industry experience in IT Support, Software development and Internet application development. The Internet boom offers me lots of unprecedented opportunities to access to diverse novel techniques. </p>For the first three years, I\'ve worked for a startup and complete some web-based application for petrochemical industry. After that, I started to serve some Internet-based companies to implement mobile apps. During this period, I not only gained experiences in technique, but also learn how to do well in teamwork and know what I\'m going to be.<p>In recent two years, I\'m strongly aware of the importance of front-end technology and quite interested in working towards becoming a React senior. In the following years, I also plan to connect all the experience \" points\" to be a better-rounded full-stack dev.</p> <b>ps: also a runner & two kids\' father~</b>',
    image: '/images/about.jpg'
}

// skills
export const skills = [
    {
        title: 'Professional Skills',
        content: '<p>I have around 2-year experience in back-end development with ASP.Net or Java Web. Then I\'ve engaged in development based on Android platform all along so that I\'m quite experienced in Java programing. With the hybrid apps becoming the predominant trend, I started to dig in front-end technology stack and implement some web pages with React in projects. To be honest, I\'m not a professional front-end developer, but convinced I could be in recent future. Python is like a bonus when I\'m required to dispose the raw data in an indoor positioning project.</p><p>Many years of programming experience lets me know the important thing is not remerbering all the technical details used in projects, but understanding the critical thinking and applying the right technologies as needed.</p><p>The following marks are valued by myself based on my project experience and could be used as reference.</p>',
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
        content: 'As an international job applicant, I\'ve spent much time in learning English. However, speaking and listening are still my weaknesses. The following marks are from the latest PTE test which is exactly used as an \"offical" reference.',
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