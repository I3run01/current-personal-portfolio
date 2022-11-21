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
               image: 'ProjectsDetails/automations/AutoPrice/Gallary/file Name.png',
               textENG: 'Name of the file to make the update of the prices',
               textPTBR: 'Nome do arquivo para fazer a atualização dos preços'
            },
            {
                image: 'ProjectsDetails/automations/AutoPrice/Gallary/companies Database.png',
                textENG: 'Companies database',
                textPTBR: 'base de dados das empresas'
            },
            {
                image: 'ProjectsDetails/automations/AutoPrice/Gallary/First MenuBar.png',
                textENG: "Fist Menubar 1 - Reload the page 2- Make product registration 3- See all product",
                textPTBR: 'Primeira barra de menu 1- Recarregar a página 2- Para registrar os preços 3 - Ver todos os produtos'
            },
            {
                image: 'ProjectsDetails/automations/AutoPrice/Gallary/Products without registration.png',
                textENG: 'Products without registration',
                textPTBR: 'Produtos sem registros',
            },
            {
                image: 'ProjectsDetails/automations/AutoPrice/Gallary/Option 2.png',
                textENG: 'Option 2. Here you put the products information and below it will shows the product price',
                textPTBR: 'Opção 2. Aqui você coloca as informaçãos do produto e em baixo aparede  preço deles'
            },
            {
                image: 'ProjectsDetails/automations/AutoPrice/Gallary/Option 3.png',
                textENG: 'Option 3. See all products in the note',
                textPTBR: 'Opção 3. Ver todos os produtos da nota',
            },
            {
                image: 'ProjectsDetails/automations/AutoPrice/Gallary/Second MenuBar.png',
                textENG: 'Second menubar. All product registrated If all products had been registrated 1 - To continue 2 - To see all registrated product 3 - register in Londrisoft 4 - print the price in the Londrisoft',
                textPTBR: 'Segunda barra de menu. Mostra essa barra se todos os produtos tiverem cadastrodos 1 - Continuar 2 -Ver todos os produtos registrados 3 - Registrar os produtos na londrisoft 4 - Imprimir os preços na Londrisoft',
            },
            {
                image: 'ProjectsDetails/automations/AutoPrice/Gallary/Third MenuBar.png',
                textENG: `
                    Last menubar
                    0 - To finish the software
                    1 -  See the products that have increased the prices
                    2 - See the products that have decreased the prices
                    3 - See the products that have no changes in the prices
                    4 - Update the prices that have increased the prices
                    5 - Update the prices that have decreased the prices
                    6 - Print the prices that have increased the prices 
                    7 - Print the prices that have decreased the prices
                `,
                textPTBR: 
                `
                    Última barra de menu
                    0 - Finalizar o software
                    1 - Ver todos os produtos que subiram os preços
                    2 - Ver todos os produtos que diminuiram os preços
                    3 - Ver os produtos que não mudaram os preços
                    4 - Atualizar os produtos que aumentaram os preços
                    5 - Atualizar os produtos que não aumentam os preços
                    6 - Imprimir os produtos que aumentaram os preços
                    7 - Impremir os produtos que diminuiram os preços
                `,
            },
            
        ]
    ),

    new projectDetailsClass
    (
        'Bitcoin Trade',
        'Bitcoin Trade',
        "Bot para fazer trade de Bitcoin",
        "Bot to make trade in Bitcoin",
        'ProjectsDetails/automations/Bitcoin Trade/Cape.png',
        [
            {
                icons: 'Icons/GitHub.svg',
                name: 'GitHub',
                link: 'https://github.com/I3run01/Bitcoin-Trade'
            },
        ],
        [
            {
               image: 'ProjectsDetails/automations/Bitcoin Trade/Gallary/BTC buy and Sell.gif',
               textENG: 'Buy and Sell bitcoin script',
               textPTBR: 'Script de compra e venda de bitcoin'
            },
            {
                image: 'ProjectsDetails/automations/Bitcoin Trade/Gallary/BTC price.jpg',
                textENG: 'Script that shows the price of the Bitcoin',
                textPTBR: 'Script que mostra o preço do Bitcoin'
             },
             {
                image: 'ProjectsDetails/automations/Bitcoin Trade/Gallary/mainScript.gif',
                textENG: 'Main script of Bitcoin trade',
                textPTBR: 'Script principal do trade do Bitcoin'
             },
        ]
    ),
]