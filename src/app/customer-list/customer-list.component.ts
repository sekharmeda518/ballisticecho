import { Component, OnInit } from "@angular/core";
import { DisplayCustomerList } from "../models/customer-list.model";
import { CustomerListService } from "../services/customer-list.service";

@Component({
  selector: "app-customer-list",
  templateUrl: "./customer-list.component.html",
  styleUrls: ["./customer-list.component.css"],
})
export class CustomerListComponent implements OnInit {
  constructor(private customerService: CustomerListService) {}
  customerList: DisplayCustomerList;
  showModal: boolean;
  showAlert: boolean;
  UserId: string;
  Firstname: string;
  Lastname: string;
  location: string;
  province: string;

  ngOnInit() {
    this.customerService
      .getCustomers()
      .subscribe((data: DisplayCustomerList) => {
        this.customerList = data;
      });
  }

  openModal(customer: DisplayCustomerList) {
    this.showModal = true;
    this.Firstname = customer.firstName;
    this.Lastname = customer.lastName;
    this.location = customer.location;
    this.province = customer.province;
  }

  hide() {
    this.showModal = false;
  }

  hideAlert() {
    this.showAlert = false;
  }
}
