export class Course{
    id: string
    code: string
    fullName: number
    points: number
    year: number
    semester: number
    description: string

    constructor(data: any) {
        this.id = data.id;
        this.code = data.code;
        this.fullName = data.fullName;
        this.points = data.points;
        this.year= data.year;
        this.semester = data.semester;
        this.description = data.description;
      }
}