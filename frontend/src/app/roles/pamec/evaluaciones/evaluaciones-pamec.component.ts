import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluaciones-pamec',
  templateUrl: './evaluaciones-pamec.component.html',
  styleUrls: ['./evaluaciones-pamec.component.css']
})
export class EvaluacionesPamecComponent implements OnInit {

  evaluaciones: any[] = [];
  

  
  searchText: any;

  public page!: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
