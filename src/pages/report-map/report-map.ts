import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, ViewChild, ElementRef } from '@angular/core';
import d3 from 'd3';
import { statsHeatMap } from '../../data/data';

/**
 * Generated class for the ReportMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report-map',
  templateUrl: 'report-map.html',
})
export class ReportMapPage {
    itemSize: number;
  cellSize: number;
  margin: any;
  width: number;
  height: number;
  svg: any;
  xScale: any;
  yScale: any;
  colorScale: any;
  g: any;
  xAxis: any;
  yAxis: any;
  data2: any;
  title: any;
  pageName: any;
  country: any;
  // data: { country: string, product: string, value: number }[];
  data: { studentId: string, rate: number }[];

  @ViewChild('reportcanvas')
  private reportCanvas: ElementRef

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = this.navParams.get("title");
    this.pageName = this.navParams.get("pageName");
    this.data = this.navParams.get("heatMapData").map((item) => ({
      studentId: item.studentId,
      rate: this.calculate(item.rate),
      // value: this.calculate(item.rate)
    }));
  }

  ionViewDidLoad() {
    this.draw();
  }
  draw() {
    
    var data = this.data.map((student) => ({
      key: student.studentId,
      value: student.rate
    }));
    
    var cellSize = 20;
    
    // margins and widths
    
    var margin = {top: 40, right: 80, bottom: 10, left: 140},
        width = 500 - margin.left - margin.right,
        height = 750 - margin.top - margin.bottom;
        var yHeight = 400;
    
    var x = d3.scale.linear()
        .domain([0, 100])
        .range([0, width])
    
    var xAxis = d3.svg.axis()
        .scale(x)
        .ticks(5)
        .outerTickSize(1)
        .tickPadding(10)
        .orient("top");
    
    var y = d3.scale.ordinal()
        .domain(data.map((item) => item.key))
        .rangePoints([0, yHeight]);
    
    var yAxis = d3.svg.axis()
        .scale(y)
        .outerTickSize(1)
        .tickPadding(10)
        .orient("left");
    
    // rendering svg
    
    var svg = d3.select(this.reportCanvas.nativeElement).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    // rendering y-axis
    
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);
    
    // rendering x-axis
    
    svg.append("g")
        .attr("class", "x axis")
        .call(xAxis);
    
    // rendering points
    
    svg.selectAll("square")
            .data(data)
          .enter().append('rect')
          .attr('class', 'cell')
          .attr('width', cellSize)
          .attr('height', cellSize)
          .attr('y', function (d) { return y(d.key); })
          .attr('x', function (d) { return x(d.value); })
          .attr('fill', function (d) {
            if (d.value && d.value <= 50) {
              return '#87CEEB';
            } else if (d.value && d.value > 50 && d.value <= 75) {
              return '#4F94CD	';
            } else if (d.value && d.value > 75 && d.value <= 100) {
              return '#1874CD';
            } else if (!d.value) {
              return '#ddd';
            }
          });
    
  }

  calculate(num) {
    if(num>=80 && num <=100){
      console.log('inside 90');
      return 90;
    } else if(num>=60 && num <80) {
      console.log('inside 70');
      return 70;
    }  else if(num>=40 && num <60) {
      console.log('inside 50');
      return 50;
    } else if(num>=20 && num <40) {
      console.log('inside 30');
      return 30;
    } else if(num>=0 && num <20) {
      console.log('inside 10');
      return 10;
    }
   }

  //  setLength(dataLength) {
  //   console.log('inside', dataLength);
  //   if(dataLength>=20 &&  dataLength<30) {
  //     return 3;
  //   } else if(dataLength>=15 &&  dataLength<20) {
  //     return 2.2;
  //   } else if(dataLength>=10 &&  dataLength<15) {
  //     return 1.8;
  //   } else if (dataLength>=5 &&  dataLength<10) {
  //     return 1.3;
  //   } else if (dataLength>=3 &&  dataLength<5) {
  //     return 0.8
  //   } else if (dataLength>=0 &&  dataLength<3) {
  //     return 0.3;
  //   } else {
  //     return 4;
  //   }
  //  }
}