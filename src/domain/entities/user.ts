export class User {
    public id: string
    public name: string
    public password: string

    constructor(id: string, name: string, password: string) {
        this.id = id,
        this.name = name,
        this.password = password
    }
}