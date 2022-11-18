import {projectDetailsClass} from '../../../components/ProjectsDetails/ProjectDetailsClass/ProjectDetailsClass'

export const projectsWithDataBase = [
    new projectDetailsClass
    (
        'Página de Login HeroQuestions', //titleENG
        'Login Page HeroQuestions', //titlePTBR
        "este projeto foi desenvolvido para testar minhas habilidades em Node.JS, banco de dados, backend em geral. Neste projeto você coloca algumas habilidades de um herói que você gosta e essas habilidades serão salvas no banco de dados. Eu usei mongoDB como banco de dados. Este projeto também tem um sistema de login e outro de criar conta.", //DescriptionPTBR
        "this project was developed to test my abilities in Node.JS, database, backend in general. In this project you put some skills of one hero you like and this skills will be save in the database. I used mongoDB as database. This project also has a signup and a sigin page.", //DescriptionENG
        'ProjectsDetails/projectsWithDataBase/HeroQuestions/Cape.png', //Cape image
        [
            {
                icons: 'Icons/GitHub.svg',
                name: 'GitHub FrontEnd',
                link: 'https://github.com/I3run01/HeroQuestions-FrontEnd'
            },
            {
                icons: 'Icons/GitHub.svg',
                name: 'GitHub BackEnd',
                link: 'https://github.com/I3run01/HeroQuestions-BackEnd'
            },
            
        ],
        [
            {
               image: 'ProjectsDetails/projectsWithDataBase/HeroQuestions/gallary/SignUp.png',
               textENG: 'SignUp Page of Hero Questions ',
               textPTBR: 'página de criação de contas do Hero Questions'
            },
            {
                image: 'ProjectsDetails/projectsWithDataBase/HeroQuestions/gallary/SignIn.png',
                textENG: 'SignIn Page of Hero Questions ',
                textPTBR: 'página de login do Hero Questions'
             },
             {
                image: 'ProjectsDetails/projectsWithDataBase/HeroQuestions/gallary/page01 HQ.png',
                textENG: 'Page One of the Hero Questions',
                textPTBR: 'Página Um do Hero Questions'
             },
             {
                image: 'ProjectsDetails/projectsWithDataBase/HeroQuestions/gallary/page02 HQ.png',
                textENG: 'Page Two of the Hero Questions',
                textPTBR: 'Página Dois do Hero Questions'
             },
             {
                image: 'ProjectsDetails/projectsWithDataBase/HeroQuestions/gallary/page03 HQ.png',
                textENG: 'Last page of the Hero Questions',
                textPTBR: 'Ultima página do Hero Questions'
             },
             {
                image: 'ProjectsDetails/projectsWithDataBase/HeroQuestions/gallary/noRouter.png',
                textENG: 'No router found page',
                textPTBR: 'Página para rotas erradas'
             },
            
            
        ]
    ),
]