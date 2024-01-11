export class StudyStatus{
    id: number;
    type: String;

    constructor(data:any){
        this.id = data.id
        this.type = data.type
    }
}