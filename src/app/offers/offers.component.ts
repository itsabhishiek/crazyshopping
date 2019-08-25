import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  subcatid:string="";
  msg: any;
  allproducts: any[]=[];
  config: any;
  pname:string;
  constructor(private route:ActivatedRoute , private myhttp:HttpClient) { 
     //Create dummy data
    
  }
 
  ngOnInit() {
    this.fetchproducts();
  }
 
  fetchproducts(){
    this.myhttp.get("http://localhost:3000/api/getproductsbydiscount",{responseType:"json"}).subscribe(
      (response:any[])=>{
        if(response.length>0){
          for(let i=0;i<response.length;i++){

            if(response[i]["pdiscount"]<=0)
              break;
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

