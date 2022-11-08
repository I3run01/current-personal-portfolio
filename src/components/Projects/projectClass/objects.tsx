class projectsTypes {
    private projectImage: string
    private projectNameEng:string
    private projectNamePTBR:string

    constructor(image: string, nameEng: string, namePTBR: string) {
        this.projectImage = image
        this.projectNameEng = nameEng
        this.projectNamePTBR = namePTBR
    }

    public get image() {
        return this.projectImage
    }

    public get nameEng() {
        return this.projectNameEng
    }

    public get namePTBR() {
        return this.projectNamePTBR
    }
}

export const ProjectsType = [
    new projectsTypes(
        'ProjectsType/landingPages.svg',
        'Landing pages',
        'Landing pages',
    ),
    new projectsTypes(
        'ProjectsType/automations.svg',
        'Automations',
        'Automações',
    ),
    new projectsTypes(
        'ProjectsType/challenges.svg',
        'Challenges',
        'Desafios',
    ),
    new projectsTypes(
        'ProjectsType/projectsWithDatabase.svg',
        'Projects with Database',
        'Projetos com banco de dados',
    ),
]