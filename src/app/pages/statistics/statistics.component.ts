import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Chart, registerables  } from 'chart.js';
import { min } from 'rxjs';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {


  ngOnInit(): void {
  Chart.register(...registerables);
  new Chart("myChart", {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green'],
      datasets: [{
        label: '# of Votes',
        data: [6,7,8,6,7,8,9,10],
        borderWidth: 1,
        backgroundColor: '#B5A8F0'
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          min: 0,
          max: 10
        }
      }
    }
  });


  Chart.register(...registerables);
  new Chart("myChart1", {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green'],
      datasets: [{
        label: '# of Votes',
        data: [6,7,8,6,7,8,9,10],
        borderWidth: 1,
        backgroundColor: '#B5A8F0'
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          min: 0,
          max: 10
        }
      }
    }
  });

  Chart.register(...registerables);
  new Chart("myChart2", {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green'],
      datasets: [{
        label: '# of Votes',
        data: [6,7,8,6,7,8,9,10],
        borderWidth: 1,
        backgroundColor: '#B5A8F0'
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          min: 0,
          max: 10
        }
      }
    }
  });
  }




}
