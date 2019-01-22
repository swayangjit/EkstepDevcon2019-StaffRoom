import { Injectable } from "@angular/core";

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';

import 'rxjs/add/operator/map';
@Injectable()
export class RestProvider {
    baseUrl: string = "http://localhost:3000";
    constructor(private httpClient: HttpClient) { }
    getVisitorInfo(visitorId:string) {
        return this.httpClient.get('api')
        .map(this.extractData)
        .catch(this.catchError)
      }
    
      saveTelemetry(telemetry:string) {
          return this.httpClient.get('api')
          .map(this.extractData)
          .catch(this.catchError)
      }
    
      private catchError(error: Response | any) {
          console.log(error);
          return Observable.throw(error.json().error || "Server error!");
      }
      private extractData(res: Response){
            return res.json();
        }
    }
