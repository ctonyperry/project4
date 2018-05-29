import { environment } from './../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { User } from './types/user'
import { Subject } from 'rxjs';



@Injectable()
export class CarService {

    constructor(private http: HttpClient) {}

    getCarsByUserId(userId){
        return this.http.get(`${environment.apiHost}/users/cars/` + userId);
    }

    getTicketsByLicensePlate(licensePlate){
        return this.http.get('https://data.cityofnewyork.us/resource/uvbq-3m68.json?$where=plate=%27' + licensePlate + '%27');    
    }
    // checkLogin(userName, password) {
    //     let loginRequest = {
    //         "userName": userName,
    //         "password": password
    //     }
    //     let response = this.http.post(`${environment.apiHost}/users/login/`, loginRequest);
    //     return response;
    // }

    // getUsers() {
    //     return this.http.get(`${environment.apiHost}/users/`);
    // }

    // deleteUser(userId) {
    //     return this.http.delete(`${environment.apiHost}/users/` + userId);
    // }
    // getSingleUser(userId) {
    //     return this.http.get(`${environment.apiHost}/users/` + userId)
    // }
    // updateUser(user: User) {
    //     return this.http.patch(`${environment.apiHost}/users/` + user.id, user);
    // }
    // addUser(user: User) {
    //     return this.http.post(`${environment.apiHost}/users/`, user);

    // }
    // getByUserName(userName) {
    //     return this.http.get(`${environment.apiHost}/users/getByuserName/` + userName)
    // }

}