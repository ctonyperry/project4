import { environment } from './../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { User } from './types/user'
import { Subject } from 'rxjs';



@Injectable()
export class UserService {

    constructor(private http: HttpClient) {}

    checkLogin(userName, password) {
        let loginRequest = {
            "userName": userName,
            "password": password
        }
        
        let response = this.http.post(`${environment.apiHost}/users/login/`, loginRequest);
        return response;
    }

    getUsers() {
        return this.http.get(`${environment.apiHost}/users/`);
    }

    deleteUser(userId) {
        return this.http.delete(`${environment.apiHost}/users/` + userId);
    }
    getSingleUser(userId) {
        return this.http.get(`${environment.apiHost}/users/` + userId)
    }
    updateUser(user: User) {
        return this.http.patch(`${environment.apiHost}/users/` + user.id, user);
    }
    addUser(user: any) {
        let _user =     {
            "userName": user.userName,
            "firstName": user.firstName,
            "lastName": user.lastName,
            "email": user.email,
            "password":user.password,
            "admin":"false"
        }
        return this.http.post(`${environment.apiHost}/users/`, _user);

    }
    getByUserName(userName) {
        return this.http.get(`${environment.apiHost}/users/getByuserName/` + userName)
    }

}