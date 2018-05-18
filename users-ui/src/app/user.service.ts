import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';


@Injectable()
export class UserService{

    constructor(private http: HttpClient){}

    getUsers(){
        return this.http.get('/api/users/')
    }

    deleteUser(userId){
        console.log('/api/users/' + userId);
        return this.http.delete('/api/users/' + userId);
    }
    getSingleUser(userId){
            return this.http.get('/api/users/' + userId)
    }
}