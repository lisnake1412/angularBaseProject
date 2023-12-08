import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.scss'],
})
export class HighchartsComponent {
  highcharts = Highcharts;
  chartOptions:any = {
    title: {text:'Coins today'},
    xAxis: {
      categories: [
        "1/12","2/12","3/12","4/12","5/12","6/12","7/12","8/12"
      ],
      title: {
      text: 'Coins'
    }},
    yAxis: {
      title: {
        text:'values($)'
      }
    },
    series: [
      {
        name:'BTC',
        data: [1,2,3,2,3,1,6]
      },
      {
        name:'ETH',
        data: [3,4,5,3,2,2,1]
      }
    ],
  };
}
