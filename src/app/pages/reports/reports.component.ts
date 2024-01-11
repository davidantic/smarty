import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Report } from 'src/app/models/report';
import { ReportService } from 'src/app/services/report-service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  report: Report = {} as Report;
  course: string
  description: string
  term: string
  angForm: FormGroup

  constructor(private api: ReportService) { }

  ngOnInit(): void {
		this.angForm = new FormGroup({
			course: new FormControl(null, [Validators.required]),
			description: new FormControl(null, [Validators.required]),
      term: new FormControl(null, [Validators.required])
    })
	}

	submit() {
    if (this.angForm.valid) {
      this.report.course = this.angForm.controls?.['course']?.value
      this.report.description = this.angForm.controls?.['description']?.value
      this.report.term = this.angForm.controls?.['term']?.value
      this.api.createReport(this.report).subscribe(()=>{
      window.alert("Successfully added!")
      })
    }
  }
}
