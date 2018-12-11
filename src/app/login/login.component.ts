import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: User[];
  constructor(private userService: UserService) { }

  ngOnInit() {

  }

  login(userName : String,password : String): void {
    const user = new User(userName,password)
    const resultuser = this.userService.login(user)
    console.log(resultuser)
      
  }


  register(userName : String,password : String): void {
    const newuser = new User(userName,password)
    this.userService.CreateUser(newuser)
      .subscribe();
  }

}
