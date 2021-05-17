import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CustomerListService {
  constructor(private httpClient: HttpClient) {}

  mapProvince = {
    NL: "Newfoundland and Labrador",
    PE: "Prince Edward Island",
    NS: "Nova Scotia",
    NB: "New Brunswick",
    QC: "Quebec",
    ON: "Ontario",
    MB: "Manitoba",
    SK: "Saskatchewan",
    AB: "Alberta",
    BC: "British Columbia",
    YT: "Yukon",
    NT: "Northwest Territories",
    NU: "Nunavut",
  };

  firstLastName: any[] = [];

  getCustomers(): Observable<any> {
    return this.httpClient
      .get("https://ballistictest.azurewebsites.net/api/customers")
      .pipe(
        map((res: any) => {
          return res.map((data) => {
            this.firstLastName = data.name.split(/\s+/);
            return {
              firstName: this.firstLastName[0],
              lastName: this.firstLastName[1],
              location: data.location,
              province: this.mapProvince[data.location],
            };
          });
        })
      );
  }
}
