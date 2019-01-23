import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChildDetailsPage } from '../child-details/child-details';
import { HttpClient } from '@angular/common/http';
import { isArray } from 'ionic-angular/umd/util/util';

@Component({
  selector: 'page-home-user-flow',
  templateUrl: 'home-user-flow.html',
})
export class HomeUserFlowPage {
  parentName: any[] = [];
  parentDetailsResponse: any

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpClient: HttpClient
  ) {
  }


  ionViewDidLoad() {
    this.getParentDetails();
  }

  getParentDetails() {
    const request = {
      "id": "open-saber.registry.search",
      "ver": "1.0",
      "ets": "11234",
      "params":
      {
        "did": "",
        "key": "",
        "msgid": ""
      },

      "request":
      {
        "Parent": {
        }
      }
    };

    const header = {
      headers: {
        'x-authenticated-user-token': 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ1WXhXdE4tZzRfMld5MG5PS1ZoaE5hU0gtM2lSSjdXU25ibFlwVVU0TFRrIn0.eyJqdGkiOiI5NDAyODcwMC1jYWI0LTRkM2YtYWYyZi01ZmZmZjM5NGI1YjAiLCJleHAiOjE1NDgyMzg1NzQsIm5iZiI6MCwiaWF0IjoxNTQ4MjIwNTc0LCJpc3MiOiJodHRwczovL2Rldi5zdW5iaXJkZWQub3JnL2F1dGgvcmVhbG1zL3N1bmJpcmQiLCJhdWQiOiJhZG1pbi1jbGkiLCJzdWIiOiI4NzRlZDhhNS03ODJlLTRmNmMtOGYzNi1lMDI4ODQ1NTkwMWUiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhZG1pbi1jbGkiLCJhdXRoX3RpbWUiOjAsInNlc3Npb25fc3RhdGUiOiI3YjAwMWUyYi0wMDZlLTRiOTAtYTU5Zi1lNDBiYmJlNTUzZDgiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnt9LCJuYW1lIjoiQ3JlYXRpb24iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJudHB0ZXN0MTAyIiwiZ2l2ZW5fbmFtZSI6IkNyZWF0aW9uIiwiZmFtaWx5X25hbWUiOiIiLCJlbWFpbCI6ImFyY2hhbmFrKzFAaWxpbWkuaW4ifQ.V6EoG9i857Lx44Xo09uSa2bZSC8O89VG4Mu0QcO38G3krObPf118gNQ-N9OPbhFFP8V9Pb37BV7xDjm5utmec4gQaPwvqeA6D6m6x_MzTXfyBXZ-wG1tf_yAW8I0WSSARzKS0OankTYFPnUgMO0Zq89W0Qac89En9OPeM8VTk68INMOBp5Xj4h3SAhhGbC5DFxkDphY2fr5EMlRhmhkKRGJbqr3gJeqpeSmLtMrbt6DbapbkE7NKZGDCR_15hNuVSn1OQ33iCx5rZe7VZO4lKr-iVoAo8o6lcsNvG1AayBFPg4TqujjKHajZChQxE9BhWYj8yYYfyijqpz4I74Wtrg',
        "Access-Control-Allow-Origin": "*"
      }
    };
    this.httpClient.post("http://52.172.187.3:8080/search",
      request, header)
      .subscribe((data: any) => {
        console.log('data is', data);
        this.parentDetailsResponse = data.result;
        console.log(this.parentDetailsResponse);
        this.parentDetailsResponse.forEach(element => {
          this.parentName.push(element.name);
        });
      }, error => {
        console.log(error);
      });
  }

  navigateToChildDetailsPage(index) {
    console.log(typeof(this.parentDetailsResponse[index].children));
    this.navCtrl.push(ChildDetailsPage, {
      children: this.parentDetailsResponse[index].children
    });
  }

}
