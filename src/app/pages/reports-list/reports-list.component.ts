import { Component } from '@angular/core';
import { Report } from 'src/app/models/report';
import { ReportService } from 'src/app/services/report-service';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.css']
})
export class ReportsListComponent {
  reports: Report[] = []

  constructor(private api : ReportService) { 
  }

  ngOnInit(): void{
    this.fetchReports();
  }

fetchReports(){
  this.api.fetchReports().subscribe(data=>{
    this.reports = data.content
  })
}
}
