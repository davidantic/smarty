import { Student } from "./student";
import { Task } from "./task";

export class Activity{
    id: number;
    activityName: String;
    comment: String;
    points: number;
    student: Student;
    task: Task

    constructor(data:any){
        this.id = data.id
        this.activityName = data.activityName
        this.comment = data.comment
        this.points = data.points
        this.student = data.student
        this.task = data.task
    }
}