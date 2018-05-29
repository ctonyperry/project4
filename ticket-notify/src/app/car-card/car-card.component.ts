import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnInit {

  @Input() car: any;

  constructor() { }

  ngOnInit() {
    
  }

}
