import {projectDetailsClass} from '../../../components/ProjectsDetails/ProjectDetailsClass/ProjectDetailsClass'

export const projectsWithDataBase = [
    new projectDetailsClass
    (
        'Titulo projetos com banco de dados',
        'Projects with database title',
        "banco de dados banco de dados banco de dados banco de dados banco de dados banco de dados banco de dados ",
        "database database database database database database database database database database database database database database ",
        'ProjectsDetails/automations/AutoPrice/Cape.jpg',
        [
            {
                icons: 'Icons/GitHub.svg',
                name: 'GitHub',
                link: 'https://github.com/I3run01/Projeto_Auto_Preco_Python'
            },
        ],
        [
            {
               image: 'ProjectsDetails/automations/AutoPrice/Gallary/comparador.gif',
               textENG: 'Coding of comparison price part in Pyhon',
               textPTBR: 'Código em python da comparação de preço'
            },
        ]
    ),
]