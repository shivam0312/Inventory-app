import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  products = [{name:'test'}];
  id;
  name;
  vendor;
  mrp;
  batch_num;
  quantity;
  batch_date;
  is_approved;
  selectedProduct;
  is_staff;
  is_requests;

  constructor(private api:DashboardService) {
    this.getProducts();
    this.is_staff= false
    this.is_requests = false
    //this.selectedProduct = {id: this.id, name: this.name, vendor: this.vendor,mrp: this.mrp,batch_num: this.batch_num, quantity: this.quantity,batch_date: this.batch_date}
  }
  ngOnInit() {
  }
  getProducts = () => {
    this.api.getAllProducts().subscribe(
      data => {
        this.products = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  productClicked = (product) =>{
    this.api.getOneProduct(product.id).subscribe(
      data => {
        this.id = data.id
        this.name = data.name;
        this.vendor = data.vendor;
        this.mrp = data.mrp;
        this.batch_num = data.mrp;
        this.quantity = data.quantity;
        this.batch_date = data.batch_date;
        this.is_approved = data.is_approved;
        // this.selectedProduct = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  updateProduct = () => {
    this.selectedProduct = {id: this.id, name: this.name, vendor: this.vendor,mrp: this.mrp,batch_num: this.batch_num, quantity: this.quantity,batch_date: this.batch_date, is_approved: this.is_approved}
    this.api.putProduct(this.selectedProduct).subscribe(
      data=> {
        this.getProducts();
      },
      error => {
        console.log(error);
      }
    );
  }
  deleteProduct = (product) => {
    this.api.removeProduct(product.id).subscribe(
      data=> {
        this.getProducts();
      },
      error => {
        console.log(error);
      }
    );
  }
  showRequests() {
    this.is_requests = true
  }
}

