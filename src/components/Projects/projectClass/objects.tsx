class projectsTypes {
    private projectImage: string
    private projectName:string

    constructor(image: string, name: string) {
        this.projectImage = image
        this.projectName = name
    }

    public get image() {
        return this.projectImage
    }

    public get name() {
        return this.projectName
    }
}

export const ProjectsType = [
    new projectsTypes(
        'Landing pages',
        'ProjectsType/landingPages.svg'
    ),
    new projectsTypes(
        'Automations',
        'ProjectsType/automations.svg'
    ),
    new projectsTypes(
        'Challenges',
        'ProjectsType/challenges.svg'
    ),
    new projectsTypes(
        'projects with Database',
        'ProjectsType/projectsWithDatabase.svg'
    ),
]