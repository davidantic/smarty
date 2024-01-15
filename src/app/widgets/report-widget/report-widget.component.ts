import { Component } from '@angular/core';
import { Report } from 'src/app/models/report';
import { ReportService } from 'src/app/services/report-service';

@Component({
  selector: 'app-report-widget',
  templateUrl: './report-widget.component.html',
  styleUrls: ['./report-widget.component.css']
})
export class ReportWidgetComponent {

  reports: Report[] = []

  constructor(private api : ReportService) { 
  }

  ngOnInit(): void{
    this.fetchReports();
  }

  fetchReports(){
  this.api.fetchReports().subscribe(data =>{
    this.reports = data.content
  })
}}
