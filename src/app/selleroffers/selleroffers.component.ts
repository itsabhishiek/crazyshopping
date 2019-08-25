import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-selleroffers',
  templateUrl: './selleroffers.component.html',
  styleUrls: ['./selleroffers.component.css']
})
export class SelleroffersComponent implements OnInit {

  subcatid:string="";
  msg: any;
  allproducts: any[];
  config: any;
  collection = { count: 60, data: [] };
  discount: string="";
       constructor(private route:ActivatedRoute , private myhttp:HttpClient) { 
  }
  pageChanged(event){
    this.config.currentPage = event;
  }
  ngOnInit() {
    this.fetchproducts();   
  }
  adddiscount(id){
    var reqparms={prodid:id,pdiscount:this.discount};
    this.myhttp.put("http://localhost:3000/api/updatediscount",reqparms,{responseType:"json"}).subscribe(
    (res)=>{
    },
    (error)=>{
      this.msg=error;
    }
    )
  }

  fetchproducts(){
    this.myhttp.get("http://localhost:3000/api/getsellerproducts?selleruname="+sessionStorage.getItem("uname"),{responseType:"json"}).subscribe(
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
