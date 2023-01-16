import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Actividad } from 'src/app/models/Pamec/actividad.dto';
import { CriterioPam } from 'src/app/models/Pamec/criteriopam.dto';
import { CriteriopamService } from 'src/app/services/Pamec/criteriopam.service';

@Component({
  selector: 'app-editarcritpam',
  templateUrl: './editarcritpam.component.html',
  styleUrls: ['./editarcritpam.component.css']
})
export class EditarcritpamComponent implements OnInit {

  actividad: Actividad = null
  criterio: CriterioPam = null

  constructor(
    private criteriopamService: CriteriopamService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.criteriopamService.detail(id).subscribe(
      data => {
        this.criterio = data;
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/criteriopam']);
      }
    );

    this.capturarNombreActividad()
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.criteriopamService.update(id, this.criterio).subscribe(
      data => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/criteriopam']);
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['/criteriopam/agregar']);
  }

  capturarNombreActividad(): void{
    var copy = document.getElementById("actividad-nombre");
    var elementId = sessionStorage.getItem("elementId");
    
    copy.textContent = " " + elementId + "." 
  }
}
