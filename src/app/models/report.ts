export class Report{
    id: Number;
    course: string
    description: string
    term: string

    constructor(data: any) {
        this.id = data.id;
        this.course = data.course;
        this.description = data.description;
        this.term = data.term
      }
}