import { Component, OnInit } from '@angular/core';
import { PrestadorDto } from 'src/app/models/prestador.dto';
import { Municipio } from 'src/app/models/Prestador/municipio';
import { Usuario } from 'src/app/models/usuario';
import { MunicipioService } from 'src/app/services/NuevoPrestador/municipio.service';
import { PrestadorService } from 'src/app/services/prestador.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-acta-sp-pro',
  templateUrl: './acta-sp-pro.component.html',
  styleUrls: ['./acta-sp-pro.component.css']
})
export class ActaSpProComponent implements OnInit {

  prestador: PrestadorDto[];
  usuario: Usuario[];
  municipio: Municipio[];

  listaVacia: any = undefined;

  constructor(
    private prestadorService: PrestadorService,
    private municipioService: MunicipioService,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.cargarMunicipio();
    this.cargarUsuario();
    this.unsoloCheckbox();
  }

  cargarMunicipio(): void {
    this.municipioService.lista().subscribe(
      data => {
        this.municipio = data;
        this.listaVacia = undefined;
      },
      err => {
        this.listaVacia = err.error.message;
      }
    )
  }

  cargarUsuario(): void {
    this.usuarioService.lista().subscribe(
      data => {
        this.usuario = data;
        this.listaVacia = undefined;
      },
      err => {
        this.listaVacia = err.error.message;
      }
    )
  }


  cargarPrestadoresByMun(): void {
    var id = (document.getElementById('mun_id')) as HTMLSelectElement
    var sel = id.selectedIndex;
    var opt = id.options[sel]
    var Value = (<HTMLSelectElement><unknown>opt).value;

    this.prestadorService.listMun(Value).subscribe(
      data => {
        this.prestador = data;
        this.listaVacia = undefined
      },
      err => {
        this.listaVacia = err.error.message;
      }
    );
    var nit = (document.getElementById('nit')) as HTMLSelectElement
    nit.value = null
    var direccion = (document.getElementById('direccion')) as HTMLSelectElement
    direccion.value = null
    var telefono = (document.getElementById('telefono')) as HTMLSelectElement
    telefono.value = null
    var email = (document.getElementById('email')) as HTMLSelectElement
    email.value = null
    var rep_legal = (document.getElementById('repleg')) as HTMLSelectElement
    rep_legal.value = null
    var cod_pres = (document.getElementById('codpres')) as HTMLSelectElement
    cod_pres.value = null
  }

  
  llenarCampos() {
    var id = (document.getElementById('prestador')) as HTMLSelectElement
    var sel = id.selectedIndex;
    var opt = id.options[sel]
    var Codigo = (<HTMLSelectElement><unknown>opt).value;

    console.log(Codigo)

    this.prestadorService.listaOne(Codigo).subscribe(
      data => {
        for (const pres of this.prestador) {
          if (pres.pre_cod_habilitacion === Codigo) {
            var nit = (document.getElementById('nit')) as HTMLSelectElement
            nit.value = pres.pre_nit;
            var direccion = (document.getElementById('direccion')) as HTMLSelectElement
            direccion.value = pres.pre_direccion;
            var telefono = (document.getElementById('telefono')) as HTMLSelectElement
            telefono.value = pres.pre_telefono;
            var email = (document.getElementById('email')) as HTMLSelectElement
            email.value = pres.pre_email;
            var rep_legal = (document.getElementById('repleg')) as HTMLSelectElement
            rep_legal.value = pres.pre_representante;
            var cod_pres = (document.getElementById('codpres')) as HTMLSelectElement
            cod_pres.value = pres.pre_cod_habilitacion;
          }
        }
      },
      err => {
        this.listaVacia = err.error.message;
      }
    );

  }


  sedePrincipal(): void {
    var id = (document.getElementById('sedep')) as HTMLSelectElement
    var sel = id.selectedIndex;
    var opt = id.options[sel]
    var Valor = (<HTMLSelectElement><unknown>opt).value;

    if (Valor === 'no') {
      var msj = (document.getElementById('msj')) as HTMLDivElement
      msj.innerHTML = "<p>IDENTIFIQUE A CONTINUACION LA UBICACIÓN DE LA SEDE PRINCIPAL</p>"
      var p = (document.querySelector('p')) as HTMLElement
      p.setAttribute("id", "msj_p")
      p.setAttribute("class", "p_color")
      p.setAttribute("style", "user-select: none; color: mediumblue")

      var localidad = (document.getElementById('localidad')) as HTMLInputElement
      localidad.disabled = false
      var direccion = (document.getElementById('dirubic')) as HTMLInputElement
      direccion.disabled = false
    } else if (Valor === 'si') {
      var msj_p = (document.getElementById('msj_p')) as HTMLElement
      msj_p.remove()
      var localidad = (document.getElementById('localidad')) as HTMLInputElement
      localidad.disabled = true
      var direccion = (document.getElementById('dirubic')) as HTMLInputElement
      direccion.disabled = true
    }

  }

  onRegister(): void {

  }


  unsoloCheckbox(): void {
    var checkbox1 = (document.getElementById("inicial")) as HTMLInputElement;
    var checkbox2 = (document.getElementById("segumiento")) as HTMLInputElement;
    checkbox1.onclick = function () {
      if (checkbox1.checked != false) {
        checkbox2.checked = null;
      }
    }
    checkbox2.onclick = function () {
      if (checkbox2.checked != false) {
        checkbox1.checked = null;
      }
    }
}
}
