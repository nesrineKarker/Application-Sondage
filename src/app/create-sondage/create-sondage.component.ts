import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VoteService } from '../vote.service';


@Component({
  selector: 'app-create-sondage',
  templateUrl: './create-sondage.component.html',
  styleUrls: ['./create-sondage.component.css']
})
export class CreateSondageComponent implements OnInit {
  createSondageForm: FormGroup;
  tableau: any[];
  Subject: {
    titleSubject:string,
    description:string,
   }
  constructor(private service:VoteService) {/* localStorage.setItem('subject',JSON.stringify([]));*/}

  ngOnInit() {
    this.tableau = JSON.parse(localStorage.getItem('subject'));
    this.createSondageForm = new FormGroup({
      titleSubject: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),

    });
  
  }

  create(){
    this.tableau.push( this.createSondageForm.value);
    this.service.createSubject(this.tableau);
  
  }

}
