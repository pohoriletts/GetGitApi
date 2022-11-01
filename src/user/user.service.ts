import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './user';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) { }
    getUser(userLogin: string): Observable<IUser> {
        return this.http.get<IUser>('https://api.github.com/users/' + userLogin);
    }
}