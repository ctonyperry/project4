import { CarService } from './../car.service';
import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
  providers: [CarService]
})
export class CarListComponent implements OnInit {

  cars: any;
  carListSubject = new Subject();
  @Input() userId: number;

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carListSubject.subscribe(
      success=>{
        this.carService.getCarsByUserId(this.userId).subscribe(response=>{
          this.cars=response;
          console.log(JSON.stringify(response));
        })
      },
      error=>{}
    )
    this.carListSubject.next();
  }

}
