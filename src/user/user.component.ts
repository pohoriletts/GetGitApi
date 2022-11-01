import { Component, OnInit } from '@angular/core';
import { IUser } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private user: UserService) { }
  userResult: Partial<IUser> = {};

  getUserByLogin(login: string): void {
    this.user.getUser(login).subscribe(result => {
      this.userResult = result;
    });
  }
  ngOnInit(): void {
  }
}
