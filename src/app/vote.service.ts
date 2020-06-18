import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  
  listSubjects:any[];

  constructor(private route: Router,private http: HttpClient) { }

  createSubject(listSubjects){
    localStorage.setItem('subject',JSON.stringify(listSubjects));
    this.route.navigateByUrl('/liste-sondages')
  }
  
}
