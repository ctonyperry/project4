import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { User } from './types/user'


@Injectable()
export class ToiletSearchService {
    //example get
    // https://data.cityofnewyork.us/resource/6aka-uima.json?$where=startdatetime%20between%20%272015-01-10T12:00:00%27%20and%20%272015-01-10T14:00:00%27

    constructor(private http: HttpClient){}

    getToilets(borough) {
        return this.http.get('https://data.cityofnewyork.us/resource/r27e-u3sy.json?borough=%27' + borough + '%27');
    }
}