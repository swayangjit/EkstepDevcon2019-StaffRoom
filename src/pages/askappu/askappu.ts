import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-askappu',
  templateUrl: 'askappu.html',
})
export class AskappuPage {
  appuAvatar = '../../assets/imgs/appu.png';
  userAvatar = '../../assets/imgs/teacher.png';
  usersAnswers = [];
  userSelectedCommands = [];
  globalTeacher1Data  =  {
    "msg": "You have covered the topics <b>Sun</b>, <b>Planets</b> and <b>Earth</b> in your previous period for this class and the class performance is not satisfactory. Practice material for these topics would help your students. Do you want me to create a package with practice material for these topics? Additionally, you can also start teaching the next topic <b>See</b>",
    "options": [
      {
        "command": "Create Practice Material for last class topics",
        "msg": "Add an assessment?",
        "options": [
          {
            "command": "Yes",
            "msg": "Noted. Creating a package right away..."
          },
          {
            "command": "No",
            "msg": "Noted. Creating a package right away..."
          }
        ]
      },
      {
        "command": "Teach the topic Moon",
        "msg": "How would you like to create a package?",
        "options": [
          {
            "command": "With Assessment",
            "msg": "Noted. Creating a package right away..."
          },
          {
            "command": "Without Assessment",
            "msg": "Noted. Creating a package right away..."
          }
        ]
      }
    ]
  }
  teacher1 = this.globalTeacher1Data;
  temp = {};
  suggestions = true;
  constructor(public navCtrl: NavController) {
    this.usersAnswers.push({'msg': this.teacher1.msg,'command':''});
  }

  selectCommand(data) {
    this.suggestions = false;
    this.temp = {'msg': data.msg,'command':data.command};
    this.userSelectedCommands.push(data.command);
    this.usersAnswers.push(this.temp);
    if(data.options){
      this.teacher1 = data;
      this.suggestions = true;
    }else{
      console.log("No options/commands",this.userSelectedCommands);
      //Call API for creating content on this topic
    }
  }
}
