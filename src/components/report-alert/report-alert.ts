import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import d3 from 'd3';
import { statsHeatMap } from '../../data/data';

@Component({
  selector: 'report-alert',
  templateUrl: 'report-alert.html'
})
export class ReportAlertComponent {
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
    this.data = this.navParams.get("heatMapData").map( (item) => ({
      country: item.studentId,
      product: item.topics,
      value: item.rate
    }));
  }

  ionViewDidLoad() {
    this.draw();
  }
  draw() {
    var itemSize = 45,
      cellSize = itemSize - 1,
      margin = { top: 70, right: 5, bottom: 5, left: 100 };

    var width = 370 - margin.right - margin.left,
      height = 370 - margin.top - margin.bottom;

    var formatDate = d3.time.format("%Y-%m-%d");

    var x_elements = d3.set(this.data.map( (item) => { return item.product; })).values(),
      y_elements = d3.set(this.data.map( (item) => { return item.country; })).values();

    var xScale = d3.scale.ordinal()
      .domain(x_elements)
      .rangeBands([0, x_elements.length * itemSize]);

    var xAxis = d3.svg.axis()
      .scale(xScale)
      .tickFormat( (d) => {
        return d;
      })
      .orient("top");

    var yScale = d3.scale.ordinal()
      .domain(y_elements)
      .rangeBands([0, y_elements.length * itemSize]);

    var yAxis = d3.svg.axis()
      .scale(yScale)
      .tickFormat(function (d) {
        return d;
      })
      .orient("left");

    var colorScale = d3.scale.threshold()
      .domain([0,100])
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
      .attr('y', function (d) { return yScale(d.country) ; })
      .attr('x', function (d) { return xScale(d.product); })
      .attr('fill', function (d) { 
        // return d.value ? colorScale(d.value) : '#ededed' as any; 
        if(d.value && d.value <= 50) {
          return '#87CEEB';
        } else if(d.value && d.value > 50 && d.value <=74 ){
        return '#4F94CD	';
        } else if(d.value && d.value > 74 && d.value <=100 ){
          return '#1874CD';
        }
      });

    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .selectAll('text')
      .attr('font-weight', 'normal');

    svg.append("g")
      .attr("class", "x axis")
      .call(xAxis)
      .selectAll('text')
      .attr('font-weight', 'normal')
      .style("text-anchor", "start")
      .attr("dx", ".8em")
      .attr("dy", ".5em")
      .attr("transform", function (d) {
        return "rotate(-65)";
      });
  }

}
