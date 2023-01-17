import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluaciones-sp-pro',
  templateUrl: './evaluaciones-sp-pro.component.html',
  styleUrls: ['./evaluaciones-sp-pro.component.css']
})
export class EvaluacionesSpProComponent implements OnInit {

  evaluaciones: any[] = [];

  searchText: any;

  public page!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
