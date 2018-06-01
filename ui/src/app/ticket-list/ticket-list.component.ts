import { CarService } from './../car.service';
import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css'],
  providers: [CarService]
})
export class TicketListComponent implements OnInit {

  @Input() car: any;
  getTicketsSubject = new Subject();
  tickets: Array<any>;
  totalOwed: number = 0;
  dateSortDesc = true;
  amountSortDesc = true;

  constructor(private carService: CarService) {

  }

  ngOnInit() {
    this.getTicketsSubject.subscribe(success => {
      this.carService.getTicketsByLicensePlate(this.car.plate).subscribe(response => {
        this.tickets = (response as Array<any>);
        this.calculateTotalOwed();
      })
    })
    this.getTicketsSubject.next();
  }

  calculateTotalOwed() {
    for (var i = 0; i < this.tickets.length; i++) {
      this.totalOwed += this.tickets[i].amount_due;
    }
    this.totalOwed = this.totalOwed / 100000;
  }

  sortByDate() {

    if (this.dateSortDesc) {
      this.tickets.sort((a, b) => {
        if (a.issue_date < b.issue_date) { return -1 };
        if (a.issue_date > b.issue_date) { return 1 };
        return 0;
      })
    } else {
      this.tickets.sort((a, b) => {
        if (a.issue_date < b.issue_date) { return 1 };
        if (a.issue_date > b.issue_date) { return -1 };
        return 0;
      })
    }
    this.dateSortDesc = !this.dateSortDesc;

  }

  sortByAmount() {
    if (this.amountSortDesc) {
      this.tickets.sort((a, b) => {
        if (a.amount_due < b.amount_due) { return -1 };
        if (a.amount_due > b.amount_due) { return 1 };
        return 0;
      })
    } else {
      this.tickets.sort((a, b) => {
        if (a.amount_due < b.amount_due) { return 1 };
        if (a.amount_due > b.amount_due) { return -1 };
        return 0;
      })
    }
    this.amountSortDesc = !this.amountSortDesc;
  }

}
