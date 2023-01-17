import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-evaluaciones-sp-ips',
  templateUrl: './evaluaciones-sp-ips.component.html',
  styleUrls: ['./evaluaciones-sp-ips.component.css']
})
export class EvaluacionesSpIpsComponent implements OnInit {

  evaluaciones: any[] = [];

  searchText: any;

  public page!: number;

  constructor(tokenService: TokenService) { }

  ngOnInit(): void {
  }

}
