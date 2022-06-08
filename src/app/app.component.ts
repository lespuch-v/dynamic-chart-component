import {Component, OnInit} from '@angular/core';
import {Chart, registerables} from 'chart.js';
import * as datas from "../data.json"

Chart.register(...registerables);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  importedData = datas

  xValues: string[] = []
  yValues: number[] = []
  thisMonth: number = 479.33
  fromLastMonth: string = "2.4 %"
  currentBalance: number = 921.48
  labelData() {
    for (let i = 0; i < this.importedData.length; i++) {
      this.xValues.push(this.importedData[i].day)
    }
  }

  getDataValues() {
    for (let i = 0; i < this.importedData.length; i++) {
      // @ts-ignore
      this.yValues.push(this.importedData[i].amount)
    }
  }

  ngOnInit() {
    this.labelData()
    this.getDataValues()




    const myChart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: this.xValues,
        datasets: [{
          label: 'Spending\'s',
          data: this.yValues,
          backgroundColor: [
            "#FF9B87",
          ],
          borderSkipped: false,
          hoverBackgroundColor: [
            "#ADD4D9",
          ],
          borderRadius: 7,
          borderWidth: 1,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            display: false,
            grid: {
              display: false,
            }
          },
          x: {
            grid: {
              display: false,
            }
          }
        },
        plugins: {
          legend:{
            display: false
          },
          title: {
            display: true,
            align: "start",
            text: "Spending\'s - Last 7 days",
            font: {
              size: 25,
            }
          }
        }
      }
    });
  }

}
