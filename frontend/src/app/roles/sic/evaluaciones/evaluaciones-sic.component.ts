import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-evaluaciones-sic',
  templateUrl: './evaluaciones-sic.component.html',
  styleUrls: ['./evaluaciones-sic.component.css']
})
export class EvaluacionesSicComponent implements OnInit {

  // evaluaciones: Usuario[] = [];

  evaluaciones: any[] = [];
    
  
  searchText: any;

  public page!: number;

  constructor(
    private tokenService: TokenService,
  ) { }

  ngOnInit(): void {
    
  }

}
