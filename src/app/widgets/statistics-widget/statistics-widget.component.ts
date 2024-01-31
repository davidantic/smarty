import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-statistics-widget',
  templateUrl: './statistics-widget.component.html',
  styleUrls: ['./statistics-widget.component.css']
})
export class StatisticsWidgetComponent {
  ctx = document.getElementById('myChart');


  ngOnInit(): void {
  Chart.register(...registerables);
  new Chart("myChart", {
    type: 'bar',
    data: {
      labels: ['6', '7', '8', '9', '10'],
      datasets: [{
        label: '# of Grades',
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
