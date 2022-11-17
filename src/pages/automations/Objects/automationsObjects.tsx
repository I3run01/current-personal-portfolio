import {projectDetailsClass} from '../../../components/ProjectsDetails/ProjectDetailsClass/ProjectDetailsClass'

export const Automations = [
    new projectDetailsClass
    (
        'Automatização da correção do Preço em Python',
        'Python price update automated',
        "O projeto foi feito em Python, para atualizar os preços dos produtos automaticamente",
        "Project made in Pyhton to update the price of the products automatically",
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
               textENG: 'Coding of comparison price in Pyhon',
               textPTBR: 'Código em python da comparação de preço'
            },
            {
                image: 'ProjectsDetails/automations/AutoPrice/Gallary/mainScript.png',
                textENG: 'MainScript of the software',
                textPTBR: 'Script principal do software'
             },
             {
                image: 'ProjectsDetails/automations/AutoPrice/Gallary/price update.png',
                textENG: 'Coding of the price uptdate ',
                textPTBR: 'Código que atualiza o preço dos produtos'
             },
        ]
    ),
]