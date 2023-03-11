import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../../service/customer/customer.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../../../model/customer/customer";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[]= [];

  constructor(private customerService: CustomerService) {
    this.customerService.getAll().subscribe(next => {
      console.log(next);
      this.customers = next;
    }, error => {
      console.log("Lỗi!")
    })
  }

  ngOnInit(): void {
  }

  checkDelete(id: number) {
  }
}
