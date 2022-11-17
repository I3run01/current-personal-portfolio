import {projectDetailsClass} from '../../../components/ProjectsDetails/ProjectDetailsClass/ProjectDetailsClass'

export const projectsWithDataBase = [
    new projectDetailsClass
    (
        'Desafio PI Sigma',
        'Challenge PI Sigma',
        "Esse é um desafio do Sigma, nesse desafio você tem que achar um número específico nos decimais de pi",
        "This is a challenge from Sigma, in this challenge You should find a specific number in the pi decimals",
        'ProjectsDetails/challenges/Sigma Pi Challenge/Cape.png',
        [
            {
                icons: 'Icons/GitHub.svg',
                name: 'GitHub',
                link: 'https://github.com/I3run01/Challenge-Sigma-Geek'
            },
        ],
        [
            {
               image: 'ProjectsDetails/challenges/Sigma Pi Challenge/mainScript.gif',
               textENG: 'First challenge',
               textPTBR: 'Primeiro desafio'
            },
            {
                image: 'ProjectsDetails/challenges/Sigma Pi Challenge/Sigma challenge 2.gif',
                textENG: 'Second challenge',
                textPTBR: 'Segundo desafio'
             },
             {
                image: 'ProjectsDetails/challenges/Sigma Pi Challenge/Sigma challenge 2.gif',
                textENG: 'Second way to make the challenge 2',
                textPTBR: 'Segunda maneira de fazer o desafio 2'
             },
        ]
    ),
]