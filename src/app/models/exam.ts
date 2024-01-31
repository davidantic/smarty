import { Course } from "./course"
import { Student } from "./student"

export class Exam {
    id: number
    comment: String
    dateOfExamination: Date
    grade: number
    examinationPeriod: String
    points: number
    totalPoints: number
    course: Course
    student: Student

    constructor(data: any) {
        this.id = data.id
        this.comment = data.comment
        this.dateOfExamination = data.dateOfExamination
        this.grade = data.grade
        this.examinationPeriod = data.examinationPeriod
        this.points = data.points
        this.totalPoints = data.totalPoints
        this.course = data.course
        this.student = data.student
    }
}