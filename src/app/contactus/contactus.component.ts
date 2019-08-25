import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  message:string="";
  name:string="";
  email:string="";
  msg: any;
  constructor(private myhttp:HttpClient) { }

  ngOnInit() {

  }
  addmessage(){
 
    let params = {name:"asd",email:"j",message:",n"};
    // alert("S");
    this.myhttp.post("http://localhost:3000/api/addmessage",params,{responseType:"text"}).subscribe(
      (response)=>
      {
          alert(response);
      },
      (error)=>
      {
        alert(error);
        this.msg=error;
      }
    )
  }

}
