import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {

  subcatid:string="";
  msg: any;
  allproducts: any[]=[];
  config: any;
  pname:string;
  constructor(private route:ActivatedRoute , private myhttp:HttpClient,private myrouter:Router) { 
    myrouter.events.subscribe(event=>{ if (event instanceof NavigationEnd){
      this.ngOnInit();  
    }
    })
     //Create dummy data
    
  }
 
  ngOnInit( ) {
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
    // alert(this.pname);
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
