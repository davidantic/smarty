export class Major{
    id: number;
    code: String;
    description: String;
    duration: number;
    fullName: String;

    constructor(data: any){
        this.id = data.id
        this.code = data.code
        this.description = data.description
        this.duration = data.duration
        this.fullName = data.fullName
    }
}