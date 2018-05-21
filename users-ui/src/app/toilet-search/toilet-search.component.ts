import { Component, OnInit } from '@angular/core';
import { ToiletSearchService } from '../toiletsearch.service';
import { UserService } from '../user.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-toilet-search',
  templateUrl: './toilet-search.component.html',
  styleUrls: ['./toilet-search.component.css'],
  providers: [ToiletSearchService]
})
export class ToiletSearchComponent implements OnInit {

  constructor(private toiletSearchService: ToiletSearchService,private userService: UserService) { }
  
  toiletSearchSubject = new Subject();
  borough: any;
  toilets: any;

  ngOnInit() {
    this.toiletSearchSubject
    .subscribe(uid=>
        this.toiletSearchService.getToilets(this.borough)
        .subscribe(response => {
          this.toilets = response;
          
        })
    )
  }
  getList(borough){

    this.borough = borough;
    this.toiletSearchSubject.next();

  }

}
