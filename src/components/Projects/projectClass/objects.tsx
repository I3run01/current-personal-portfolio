class projectsTypes {
    private projectImage: string
    private projectNameEng:string
    private projectNamePTBR:string
    private projectRoutes:string

    constructor(image: string, nameEng: string, namePTBR: string, route: string) {
        this.projectImage = image
        this.projectNameEng = nameEng
        this.projectNamePTBR = namePTBR
        this.projectRoutes = route
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

    public get routes() {
        return this.projectRoutes
    }
}

export const ProjectsType = [
    new projectsTypes(
        'ProjectsType/landingPages.svg',
        'Landing pages',
        'Landing pages',
        '/landingPages'
    ),
    new projectsTypes(
        'ProjectsType/automations.svg',
        'Automations',
        'Automações',
        '/automations'
    ),
    new projectsTypes(
        'ProjectsType/challenges.svg',
        'Challenges',
        'Desafios',
        '/challenges'
    ),
    new projectsTypes(
        'ProjectsType/projectsWithDatabase.svg',
        'Projects with Database',
        'Projetos com banco de dados',
        '/challenges'
    ),
]