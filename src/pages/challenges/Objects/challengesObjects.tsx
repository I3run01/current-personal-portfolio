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
               image: 'ProjectsDetails/challenges/Sigma Pi Challenge/Gallary/mainScript.gif',
               textENG: 
               `
                First challenge \n
                What is the first 9-digit palindromic prime found in the decimal expansion of Pi? \n
                Number: 318272813 
               `,
               textPTBR: 
               `
                Primeiro desafio \n
                Qual é o primeiro primo palíndromo de 9 dígitos encontrado na expansão decimal de Pi? \n
                Numero: 318272813

               `
            },
            {
                image: 'ProjectsDetails/challenges/Sigma Pi Challenge/Gallary/Sigma challenge 2.gif',
                textENG: 
                `
                   Second challenge \n
                   What is the first 21-digit palindromic prime found in the decimal expansion of Pi? \n
                   Number: 151978145606541879151 
                `,
                textPTBR: 
                `
                    Segundo desafio \n
                    Qual é o primeiro primo palíndromo de 21 dígitos encontrado na expansão decimal de Pi? \n
                    Número: 151978145606541879151
                `
             },
        ]
    ),
]