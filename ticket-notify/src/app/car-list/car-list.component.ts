import { AddCarComponent } from './../add-car/add-car.component';
import { CarService } from './../car.service';
import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { Car } from './../types/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
  providers: [CarService]
})
export class CarListComponent implements OnInit {

  cars: Array<Car>
  carListSubject = new Subject();
  deleteCarSubject = new Subject();
  addCarSubject = new Subject();
  @Input() userId: number;
  carId: number;
  plate: any; 

  constructor(private carService: CarService) { }

  ngOnInit() {

    this.carListSubject.subscribe(
      success => {
        this.carService.getCarsByUserId(this.userId).subscribe(response => {
          this.cars = (response as Array<Car>);
          console.log(JSON.stringify(response));
        })
      },
      error => { }
    )

    this.carListSubject.next();

    this.deleteCarSubject.subscribe(success => {
      this.carService.deleteCarById(this.carId).subscribe(response => {
        console.log(response);
      })
    })

    this.addCarSubject.subscribe(success=>{
      this.carService.addNewCar(this.userId, this.plate).subscribe(response=>{
        let newCar = response as Car; 
        this.cars.push(newCar);
      })
    })
  }

  deleteCar(carId) {
    if (confirm("Are you sure you want to delete this car from your profile?")) {

      this.carId = carId;
      this.deleteCarSubject.next();
      let newCarList = this.cars.filter(car => car.id != carId);
      this.cars = newCarList;
    } else {

      console.log("Cancelled delete: " + carId);
    }
  }

  addCar(){
    this.plate = prompt("License Plate Number");
    this.addCarSubject.next();    
  }

}
