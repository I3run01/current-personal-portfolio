type externalLinks = {
    icons: string
        name:string
        link:string
}[]

export class projectDetailsClass {
    private projectTitlePTBR: string
    private projectTitleENG: string
    private projectTextPTBR: string
    private projectTextENG: string
    private projectImageCape: string     
    private externalLinks: {
        icons: string
        name:string
        link:string
    }[]
    gallary: {
        image: string
        textPTBR: string
        textENG:string
    }[]

    constructor
    (
        titlePTBR: string,
        titleENG: string,
        textPTBR:string,
        textENG:string,
        imageCape:string,
        externalLinks:externalLinks,

    ) 
    {
        this.projectTitlePTBR = titlePTBR
        this.projectTitleENG = titleENG
        this.projectTextPTBR = textPTBR
        this.projectTextENG = textENG
        this.projectImageCape = imageCape
        this.externalLinks = externalLinks

    }
}