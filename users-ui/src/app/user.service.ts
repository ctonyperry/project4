import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { User } from './types/user'


@Injectable()
export class UserService{

    constructor(private http: HttpClient){}

    getUsers(){
        return this.http.get('/api/users/')
    }

    deleteUser(userId){
        return this.http.delete('/api/users/' + userId);
    }
    getSingleUser(userId){
            return this.http.get('/api/users/' + userId)
    }
    updateUser(user: User){
        return this.http.patch('/api/users/' + user.id, user);
    }
    addUser(user: User){
        return this.http.post('/api/users/', user);

    }
    getByUserName(userName){
        return this.http.get('/api/users/getByuserName/' + userName)
    }
}