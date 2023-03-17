import {projectDetailsClass} from '../../../components/ProjectsDetails/ProjectDetailsClass/ProjectDetailsClass'

export const landingPages = [
    new projectDetailsClass
    (
        'Portifólio classico',
        'Classic Portfolio',
        "Realizei esse projeto em React.JS, nesse projeto eu aprendi a fazer animações com CSS, trabalhei com variáveis globais (ContextAPI) e componentes",
        " I did this project with React.JS, I used ContextAPI to work with global variables, I also worked with components and CSS animations.",
        'ProjectsDetails/landingPages/oldPortfolio/Cape.png',
        [
            {
                icons: 'Icons/GitHub.svg',
                name: 'GitHub',
                link: 'https://github.com/I3run01/Portfolio-Project-V-1.0'
            },
            {
                icons: 'Icons/Deploy.svg',
                name: 'Deploy',
                link: 'https://i3run01portfolio.netlify.app/'
            }
        ],
        [
            {
               image: 'ProjectsDetails/landingPages/oldPortfolio/Gallary/About Me.png',
               textENG: 'Page that say about me',
               textPTBR: 'Página que fala sobre mim'
            },
            {
                image: 'ProjectsDetails/landingPages/oldPortfolio/Gallary/openMenus.png',
                textENG: 'Old portfolio with the menu open',
                textPTBR: 'Portfólio antigo com o menu aberto'
            },
            {
                image: 'ProjectsDetails/landingPages/oldPortfolio/Gallary/Dark theme.png',
                textENG: 'Dark theme in the site',
                textPTBR: 'Tema escuro do site'
            },
            {
                image: 'ProjectsDetails/landingPages/oldPortfolio/Gallary/Projects.png',
                textENG: "This part of my old portfolio shows the projects I've done",
                textPTBR: 'Essa parte do site mostra os projetos que fiz'
            },
            {
                image: 'ProjectsDetails/landingPages/oldPortfolio/Gallary/Skills.png',
                textENG: "This part of my old portfolio shows the skills that I have",
                textPTBR: 'Essa parte do site mostra as habilidades que tenho'
            },
    ]
    ),
    new projectDetailsClass
    (
        'Portifólio da Gil',
        "Gil's portfolio",
        `
        Realizei esse projeto em React.JS.
        Usei o chat GPT para realizar algumas descrições e utilizei o midjourney para criar as imagens do projeto, trabalhei com variáveis globais (ContextAPI) e componentes.
        O projeto tem os temas dark e light, além disso, dentro do portfólio dela, o background muda conforme você muda o projeto que estiver vendo.`,
        `
        II realized this project in React.JS.
        I used the GPT chat to perform some descriptions and I used midjourney to create the project images, I worked with global variables (ContextAPI) and components.
        The project has dark and light themes, in addition, within her portfolio, the background changes as you change the project you are viewing.`
        ,
        "ProjectsDetails/landingPages/Gil's portfolio/Cape.png",
        [
            {
                icons: 'Icons/GitHub.svg',
                name: 'GitHub',
                link: 'https://github.com/I3run01/Gil-s-project'
            },
            {
                icons: 'Icons/Deploy.svg',
                name: 'Deploy',
                link: 'https://gilportfolio.netlify.app/'
            }
        ],
        [
            {
               image: "ProjectsDetails/landingPages/Gil's portfolio/Gallary/Cape.png",
               textENG: "Portfolio's cape",
               textPTBR: 'Capa do portfólio'
            },
            {
                image: "ProjectsDetails/landingPages/Gil's portfolio/Gallary/About.png",
                textENG: "Portfolio's about",
                textPTBR: 'Sobre do portfólio'
             },
             {
                image: "ProjectsDetails/landingPages/Gil's portfolio/Gallary/Experience.png",
                textENG: "Portfolio's experience",
                textPTBR: 'Experiência do portfólio'
             },
             {
                image: "ProjectsDetails/landingPages/Gil's portfolio/Gallary/Deployment.png",
                textENG: "Portfolio's deployment",
                textPTBR: 'Depoimentos do portfólio'
             },
             {
                image: "ProjectsDetails/landingPages/Gil's portfolio/Gallary/Deployment.png",
                textENG: "Portfolio's deployment",
                textPTBR: 'Depoimentos do portfólio'
             },
             {
                image: "ProjectsDetails/landingPages/Gil's portfolio/Gallary/Lógica de programação.png",
                textENG: "Programming logic in portfolio",
                textPTBR: 'Lógica de programação no portfólio'
             },
             {
                image: "ProjectsDetails/landingPages/Gil's portfolio/Gallary/Professora conteudista.png",
                textENG: "Content teacher in portfolio",
                textPTBR: 'Professra conteúdista no portfólio'
             },
             {
                image: "ProjectsDetails/landingPages/Gil's portfolio/Gallary/Robótica.png",
                textENG: "Robotic in portfolio",
                textPTBR: 'Robótica no portfólio'
             },
             {
                image: "ProjectsDetails/landingPages/Gil's portfolio/Gallary/Cape Mobile.png",
                textENG: "Mobile cape in portfolio",
                textPTBR: 'Capa em mobile no portfólio'
             },
             {
                image: "ProjectsDetails/landingPages/Gil's portfolio/Gallary/About Mobile.png",
                textENG: "Mobile about in portfolio",
                textPTBR: 'Sobre em mobile no portfólio'
             },
             {
                image: "ProjectsDetails/landingPages/Gil's portfolio/Gallary/Experience Mobile.png",
                textENG: "Mobile experience in portfolio",
                textPTBR: 'Experiência em mobile no portfólio'
             },
             {
                image: "ProjectsDetails/landingPages/Gil's portfolio/Gallary/Deployment Mobile.png",
                textENG: "Mobile deployments in portfolio",
                textPTBR: 'Depoimentos em mobile no portfólio'
             },
             {
                image: "ProjectsDetails/landingPages/Gil's portfolio/Gallary/Professora conteudista Mobile.png",
                textENG: "Mobile content teacher in portfolio",
                textPTBR: 'Professora conteudista em mobile no portfólio'
             },
             {
                image: "ProjectsDetails/landingPages/Gil's portfolio/Gallary/Galeria Mobile.png",
                textENG: "Mobile gallry in portfolio",
                textPTBR: 'Galeria Mobile no portfólio'
             },
             
    ]
    ),
    new projectDetailsClass
    (
        'site do mercado vizinhança',
        "neighborhood market",
        `
        Esse projeto é um site para um mercado de bairro, Mercado Vizinhança, o site consiste em uma página única com setores diferentes, panificadora, açougue...Criei o site com react.JS, typescript, vite, além dissso, usei algumas bibliotecas, como react-scroll, styled components e Swiper.
         `,
        `
        This project is a website for a neighborhood market, Mercado Vizinhança, the website consists of a single page with different sectors, bakery, butcher...
        I created the site with react.JS, typescript, vite, in addition, I used some libraries, like react-scroll, styled components and Swiper.`
        ,
        "ProjectsDetails/landingPages/Mercado Viz/Cape.png",
        [
            {
                icons: 'Icons/GitHub.svg',
                name: 'GitHub',
                link: 'https://github.com/I3run01/projeto-mercado-vizinhanca'
            },
            {
                icons: 'Icons/Deploy.svg',
                name: 'Deploy',
                link: 'https://mercado-vizinhanca.netlify.app/'
            }
        ],
        [
           {
              image: "ProjectsDetails/landingPages/Mercado Viz/Gallery/Inicio.png",
              textENG: "Start",
              textPTBR: 'Inicio'
           },
           {
              image: "ProjectsDetails/landingPages/Mercado Viz/Gallery/Panificadora.png",
              textENG: "Bakery",
              textPTBR: 'Panificadora'
           },        
            {
               image: "ProjectsDetails/landingPages/Mercado Viz/Gallery/Açougue.png",
               textENG: "Açougue",
               textPTBR: "Butcher's"
            },
            {
               image: "ProjectsDetails/landingPages/Mercado Viz/Gallery/Mercado.png",
               textENG: "Market",
               textPTBR: 'Mercado'
            },
            {
               image: "ProjectsDetails/landingPages/Mercado Viz/Gallery/Hortifruti.png",
               textENG: "Hortifruti",
               textPTBR: 'Hortifruti'
            },
            {
               image: "ProjectsDetails/landingPages/Mercado Viz/Gallery/Açougue Mobile.png",
               textENG: "Mobile butcher",
               textPTBR: 'Açougue em mobile'
            },
            {
               image: "ProjectsDetails/landingPages/Mercado Viz/Gallery/Hortifruti Mobile.png",
               textENG: "Mobile hortifruti",
               textPTBR: 'Hortifruti em mobile'
            },
            {
               image: "ProjectsDetails/landingPages/Mercado Viz/Gallery/Inicio Mobile.png",
               textENG: "Mobile start",
               textPTBR: 'Inicio em mobile'
            },
            {
               image: "ProjectsDetails/landingPages/Mercado Viz/Gallery/Mercado Mobile.png",
               textENG: "Mobile market",
               textPTBR: 'Mercado Mobile'
            },
            {
               image: "ProjectsDetails/landingPages/Mercado Viz/Gallery/Panificadora Mobile.png",
               textENG: "Mobile bakary",
               textPTBR: 'Panificadora Mobile'
            },
         ]
    ),
]