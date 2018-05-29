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
  constructor(private carService: CarService) { 

  }

  ngOnInit() {

    this.getTicketsSubject.subscribe(success=>{
      this.carService.getTicketsByLicensePlate(this.car.plate).subscribe(response=>{
        this.tickets = response;
      })
    })
    this.getTicketsSubject.next();
  }

}
