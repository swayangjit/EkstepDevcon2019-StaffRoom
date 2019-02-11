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
  data: { country: string, product: string, value: number }[];

  @ViewChild('reportcanvas')
  private reportCanvas: ElementRef

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = this.navParams.get("title");
    this.pageName = this.navParams.get("pageName");
    this.data = this.navParams.get("heatMapData").map((item) => ({
      country: item.studentId,
      product: item.rate,
      value: this.calculate(item.rate)
    }));
  }

  ionViewDidLoad() {
    this.draw();
  }
  draw() {
    var itemSize = 25,
      cellSize = itemSize - 1,
      margin = { top: 80, right: 5, bottom: 5, left: 140 };

    var width = 550 - margin.right - margin.left,
      height = 700 - margin.top - margin.bottom;

    var formatDate = d3.time.format("%Y-%m-%d");

    var x_elements = d3.set(this.data.map((item) => { return item.product; })).values()
      var y_elements = d3.set(this.data.map((item) => { return item.country; })).values();

    // x_elements = x_elements.map(v => parseFloat(v));
    // x_elements.sort(function (a, b) { return a - b });


    var xScale = d3.scale.ordinal()
      .domain(x_elements)
      .rangeBands([0, x_elements.length * itemSize]);

      var xTempScale = d3.scale.linear()
     .domain([0, 100]).range([0, 100]);

    var xAxis = d3.svg.axis()
      .scale(d3.scale.linear().range([0, x_elements.length * itemSize]))
      .tickFormat((d) => {
        return d*100+"";
      })
      .orient("top");

    var yScale = d3.scale.ordinal()
      .domain(y_elements)
      .rangeBands([0, y_elements.length * itemSize]);

    var yAxis = d3.svg.axis()
      .scale(yScale)
      .tickFormat((d) => {
        return d;
      })
      .orient("left");

    var colorScale = d3.scale.threshold()
      .domain([0, 100])
      .range(["rgb(165,42,42)", "#E67E22", "rgb(0,128,0)"]);

    var svg = d3.select(this.reportCanvas.nativeElement)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var cells = svg.selectAll('rect')
      .data(this.data)
      .enter().append('g').append('rect')
      .attr('class', 'cell')
      .attr('width', cellSize)
      .attr('height', cellSize)
      .attr('y', (d) => { return yScale(d.country); })
      .attr('x', (d) => { return xTempScale(Math.round(d.value*2))})
      .attr('fill', (d) => {
        // return d.value ? colorScale(d.value) : '#ededed' as any; 
        // return xTempScale( Math.round(d.value * 2) ) 
        if (d.value && d.value <= 50) {
          return '#87CEEB';
        } else if (d.value && d.value > 50 && d.value <= 74) {
          return '#4F94CD	';
        } else if (d.value && d.value > 74 && d.value <= 100) {
          return '#1874CD';
        } else if (!d.value) {
          return '#ddd';
        }
      });

    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .selectAll('text')
      .attr('font-weight', 'normal');

    svg.append("g")
      .attr("class", "x axis")
      .call(xAxis.ticks(5))
      .selectAll('text')
      .attr('font-weight', 'normal')
      .style("text-anchor", "start")
      .attr("dx", ".8em")
      .attr("dy", ".5em")
      .attr("transform", (d) => {
        return "rotate(-65)";
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
}