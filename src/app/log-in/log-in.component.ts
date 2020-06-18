import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  
  loginForm:FormGroup;
  constructor(private service: AuthService) { }

  ngOnInit() {
    form: this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  login(){
    this.service.login(this.loginForm.value.username,this.loginForm.value.password);
  }


}
