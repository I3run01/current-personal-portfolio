export class expClass {
    private startEng
    private titleEng
    private textEng
    private startPTBR
    private titlePTBR
    private textPTBR
    private workingNow: boolean

    constructor(startEng: string, titleEng:string, textEng: string, startPTBR:string, titlePTBR:string, textPTBR: string, workingNow: boolean) {
        this.startEng = startEng
        this.titleEng = titleEng
        this.textEng = textEng
        this.startPTBR = startPTBR
        this.titlePTBR = titlePTBR
        this.textPTBR = textPTBR
        this.workingNow = workingNow
    }

    public get start_eng () {
        return this.startEng
    }
    public get title_eng () {
        return this.titleEng
    }
    public get text_eng () {
        return this.textEng
    }
    public get start_PTBR () {
        return this.startPTBR
    }
    public get title_PTBR () {
        return this.titlePTBR
    }
    public get text_PTBR () {
        return this.textPTBR
    }
}

export const expObjects = [
    new expClass(
        'Sept - 2021',
        'Start in Programming',
        'In september/2021 I started in programming world, the first language I had learning was Python. I studied python in Curso em Video of the teacher Gustavo Guanabara',
        'Set - 2021',
        'Começo na programação',
        'Em Setembro de 2021, Eu comecei no mundo da programação, a primeira lingaugem que estudei foi Python. Eu estudei python pelo Curso em Vídeo do professor Gustavo Guanabara ',
        false
    ),
    new expClass(
        'Dec - 2021',
        'I made my first real project',
        'After learning Python, I created my first project. I used this project in the work. This project update automatically the price of products',
        'Dez - 2021',
        'Fiz o meu primeiro projeto',
        'Depois de aprender Python, eu criei o meu primeiro projeto, criei esse projeto para otimizar o meu trabalho na empresa. O software atualizava os preços dos produtos automaticamente',
        false
    ),
    new expClass(
        'Feb - 2022',
        'Start in front-end',
        'I start to study front-end softwares, at first, I studied in Curso em Video, but after I started to study in b7web. Although I had studied some softwarein other couses',
        'Feb - 2022',
        'Começo no front-end',
        'Eu comecei a estudar o front-end pelo Curso em Vídeo, mas depois eu comecei a estudar pela b7web, mas também estudei outros softwares por outras plataformas',
        false
    ),
    new expClass(
        'Oct - 2022',
        'Starting as a freelancer',
        'I started to study as a freelancer, in the begin I worked for free, but some time later I get some paid clients',
        'Out - 2022',
        'Começando a ser freelancer',
        'no começo do meu trabalho como freelancer, eu comecei de graça, mas com o passar do tempo, eu comecei a ser pago pelo serviço',
        true
    )
]