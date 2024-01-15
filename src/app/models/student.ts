import { Account } from "./account";
import { Major } from "./majors";
import { StudyStatus } from "./status";

export class Student{
    id: number;
    averageGrade: number;
    email: String;
    index: number; // Stavi da bude string posle!!!!
    name: String;
    password: String;
    surname: String;
    year: number;
    major: Major;
    status: StudyStatus;
    semester: number;
    account: Account;

    constructor(data: any){
        this.id = data.id
        this.averageGrade = data.averageGrade
        this.email = data.email
        this.index = data.index
        this.name = data.name
        this. password = data.password
        this.surname = data.surname
        this.year = data.year
        this.major = data.major
        this.status = data.studyStatus
    }
}