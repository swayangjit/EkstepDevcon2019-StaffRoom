import { Component } from '@angular/core';
import { Jsonp } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {constructor(private jsonp: Jsonp) {}

events: any;



// generateStartEvent(): Telemetry{

//     const edata:EData = {type:'staffroom',mode:'play'};
//     const telemetry:Telemetry = {
        
//     }
//     return telemetry
// }
}
