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
  tickets: any;
  totalOwed: number = 0;
  
  constructor(private carService: CarService) { 

  }

  ngOnInit() {
    this.getTicketsSubject.subscribe(success=>{
      this.carService.getTicketsByLicensePlate(this.car.plate).subscribe(response=>{
        this.tickets = response;
        this.calculateTotalOwed();
      })
    })
    this.getTicketsSubject.next();
  }

  calculateTotalOwed(){
    for(var i=0; i< this.tickets.length; i++){
      this.totalOwed += this.tickets[i].amount_due;
    }
    this.totalOwed = this.totalOwed / 100000;
  }

}
