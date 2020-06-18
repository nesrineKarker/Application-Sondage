import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  list:any[];
  userConnected: any;

  constructor(private route: Router,private http: HttpClient) {
    /*this.userConnected = JSON.parse(localStorage.getItem('authUser'));*/
   }
  
  register(list, user){
    list.push(user);
    localStorage.setItem('user',JSON.stringify(list));
    this.route.navigateByUrl('/login')
  }

  login(userName,password){
    let tabUsers = JSON.parse(localStorage.getItem('user'));
    this.userConnected = tabUsers.find(element => element.userName === userName && element.password===password)
     console.log(this.userConnected)
     if(!this.userConnected){
        console.log("login failed")
      }
      else{
        localStorage.setItem('authUser', JSON.stringify(this.userConnected));
        this.route.navigateByUrl('liste-sondages')
      }
    }
}
