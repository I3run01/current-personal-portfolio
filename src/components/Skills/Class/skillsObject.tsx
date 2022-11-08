export class skillsClass {
    private img
    private skillName
    private txt

    constructor(image: string, name: string, text: string) {
        this.img = image
        this.skillName = name
        this.txt = text
    }

    public get image () {
        return this.img
    }

    public get name () {
        return this.skillName
    }

    public get text () {
        return this.txt
    }
}

export const skillsObjects = [
    new skillsClass(
        'skanf',
        'React.JS',
        ''
    ),
]