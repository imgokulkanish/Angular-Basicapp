import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cricbuzz';
  todaydate;
  // imgurl = "assets/vk.jpg"
  // display = "Access Denied"
  // Name = ""
  // username1:string = "Enter Your Name";
  constructor(private myservice: MyserviceService) {}
  ngOnInit(){
    this.todaydate = this.myservice.showTodayDate();
  }
  }
  // show : boolean=true;//ngIf
  // allow = true;
  // onAllow(){
  //   return this.display="Access Allowed";
  // }

// constructor() {
//   setTimeout(()=>{
//     this.allow = false;
//   },8000);
// }
// OnUpdateName(event:Event){
//    return this.Name = (<HTMLInputElement>event.target).value;
// }
// ngOnInit(){
// }
// }

  //ngStyle
//   number:number;
//   constructor () {
//     this.number = Math.random() > 0.5 ? 0 : 1;
//   }

//   getnumber() {
//     return this.number;
//   }

//   getColor(){
//     return this.number === 0 ? 'green' : 'red';
//   }
// //structural directive-ngFor
//   employees:Employee[]=[
//     {name:"Gokul", dept:"MECH"},
//     {name:"Swathy", dept:"ECE"},
//     {name:"Balaji", dept:"CSE"},
//     {name:"Vijay", dept:"MECH"}
//   ]
// }
// class Employee{
//   name!:string;
//   dept!:string;
// }
