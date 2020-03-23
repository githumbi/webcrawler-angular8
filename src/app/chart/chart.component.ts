import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})

//connect python webcrawler here
export class ChartComponent implements OnInit {
  public doughnutChartLabels = ['python', 'Javascript', 'Java', 'Ruby'];
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = 'doughnut';
  constructor() { }
 
  ngOnInit(): void {
  }

}