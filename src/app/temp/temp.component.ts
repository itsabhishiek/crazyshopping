import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {
  allcontest: any[];
  msg: string;

  constructor(private myhttp:HttpClient ) { }

  ngOnInit() {
    this.fetchsearchproducts();
  }
  fetchsearchproducts(){
    // alert(this.pname);
    this.myhttp.get("http://codeforces.com/api/contest.list?gym=true",{responseType:"json"}).subscribe(
      (response:any[])=>{
        if(response.length>0)
          this.allcontest=response;
        else 
          this.msg="No Products Found";
      },
      (error)=>{
        this.msg=error;
      }
    )  
  }
}
