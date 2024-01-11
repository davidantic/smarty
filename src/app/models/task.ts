import { Course } from "./course";

export class Task{
    id: number;
    maxPoints: number;
    numberOfTasks: number;
    type: Type;
    course: Course;

    constructor(data: any){
        this.id = data.id
        this.maxPoints = data.maxPoints
        this.numberOfTasks = data.numberOfTasks
        this.type = data.type
        this.course = data.course
    }
}