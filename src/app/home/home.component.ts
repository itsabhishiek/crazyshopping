import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  subcatid:string="";
  msg: any;
  allproducts: any[];
  config: any;
  pname:string;
  constructor(private route:ActivatedRoute , private myhttp:HttpClient) { 
     //Create dummy data
    
  }
 
  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      this.pname=params["pname"];
      // alert(this.subcatid);
    })
    if(this.pname==null)
    this.fetchproducts();
    else
    this.fetchsearchproducts();
  }
  fetchsearchproducts(){
    // alert("n");
    this.myhttp.get("http://localhost:3000/api/searchproduct?pname="+this.pname,{responseType:"json"}).subscribe(
      (response:any[])=>{
        if(response.length>0)
          this.allproducts=response;
        else 
          this.msg="No Products Found";
      },
      (error)=>{
        this.msg=error;
      }
    )  
  }
  fetchproducts(){
    this.myhttp.get("http://localhost:3000/api/getallproducts",{responseType:"json"}).subscribe(
      (response:any[])=>{
        if(response.length>0)
          this.allproducts=response;
        else 
          this.msg="No Products Found";
      },
      (error)=>{
        this.msg=error;
      }
    )
  }


}

