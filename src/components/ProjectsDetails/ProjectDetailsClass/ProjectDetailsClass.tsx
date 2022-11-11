type externalLinksType = {
    icons: string
    name:string
    link:string
}[]

type gallaryType = {
    image: string
    textPTBR: string
    textENG:string
}[]

export class projectDetailsClass {
    private projectTitlePTBR: string
    private projectTitleENG: string
    private projectTextPTBR: string
    private projectTextENG: string
    private projectImageCape: string     
    private projectExternalLinks: externalLinksType
    private projectGallary: gallaryType

    constructor
    (
        titlePTBR: string,
        titleENG: string,
        textPTBR:string,
        textENG:string,
        imageCape:string,
        externalLinks:externalLinksType,
        gallary:gallaryType,

    ) 
    {
        this.projectTitlePTBR = titlePTBR
        this.projectTitleENG = titleENG
        this.projectTextPTBR = textPTBR
        this.projectTextENG = textENG
        this.projectImageCape = imageCape
        this.projectExternalLinks = externalLinks
        this.projectGallary = gallary

    }

    public get titlePTBR() {
        return this.projectTitlePTBR
    }

    public get titleENG() {
        return this.projectTitleENG
    }

    public get textPTBR() {
        return this.projectTextPTBR
    }

    public get textENG() {
        return this.projectTextENG
    }

    public get imageCape() {
        return this.projectImageCape
    }

    public get externalLinks() {
        return this.projectExternalLinks
    }

    public get gallary() {
        return this.projectGallary
    }
 
}