import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
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


  constructor(private api:DashboardService, public router:Router,) {
    this.getProducts();
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
  
  createProduct = () => {
    this.selectedProduct = {id: this.id, name: this.name, vendor: this.vendor,mrp: this.mrp,batch_num: this.batch_num, quantity: this.quantity,batch_date: this.batch_date}
    this.api.addProduct(this.selectedProduct).subscribe(
      data=> {
        this.products.push(data);
        this.router.navigate(['/']);
      },
      error => {
        console.log(error);
        this.router.navigate(['add-client']);
      }
    );
  }

}
