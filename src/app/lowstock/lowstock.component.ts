import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lowstock',
  templateUrl: './lowstock.component.html',
  styleUrls: ['./lowstock.component.css']
})
export class LowstockComponent implements OnInit {

 
  subcatid:string="";
  msg: any;
  allproducts: any[]=[];
  config: any;
  uname: string;
  constructor(private route:ActivatedRoute , private myhttp:HttpClient) { 
  }
  pageChanged(event){
    this.config.currentPage = event;
  }
  ngOnInit() {
    this.fetchproducts();   
  }
  fetchproducts(){
    // this.uname=(sessionStorage.getItem("uname"));
    this.myhttp.get("http://localhost:3000/api/getmostsellingproducts?selleruname="+sessionStorage.getItem("uname"),{responseType:"json"}).subscribe(
      (response:any[])=>{
        if(response.length>0){
          for(let i=0;i<response.length;i++){
            if(response[i]["pstock"]<10)
              this.allproducts.push(response[i]);
          }
        }
        else 
          this.msg="No Products Found";
      },
      (error)=>{
        this.msg=error;
      }
    )
  }
}
