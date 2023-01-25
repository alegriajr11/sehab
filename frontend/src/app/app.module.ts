import { HttpClientModule } from '@angular/common/http';
import {  LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login.component';
import { HomeComponent } from './home/home.component';

//external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MenuComponent } from './menu/menu.component';
import { PasswordModule } from "primeng/password";
import { DropdownComponent, DropdownModule} from '@coreui/angular';
import { PasswordcComponent } from './auth/passwordc.component';
import { interceptorProvider } from './interceptors/usuario.interceptor';
import { FooterComponent } from './footer/footer.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal'; 


//USUARIOS
import { ListaUsuarioComponent } from './usuario/lista-usuario.component';
import { NuevoUsuarioComponent } from './usuario/nuevo-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario.component';

//SOGC
import { ActaSicComponent } from './roles/sic/acta/acta-sic.component';
import { HomeSicComponent } from './roles/sic/home-sic.component';
import { HomeSpComponent } from './roles/sp/home-sp.component';
import { HomePamecComponent } from './roles/pamec/home-pamec.component';
import { HomeResoComponent } from './roles/reso/home-reso.component';
import { NuevoUsuarioSicComponent } from './usuario/sic/nuevo-usuario-sic.component';
import { NuevoUsuarioSpComponent } from './usuario/sp/nuevo-usuario-sp.component';
import { NuevoUsuarioPamecComponent } from './usuario/pamec/nuevo-usuario-pamec.component';
import { NuevoUsuarioResoComponent } from './usuario/reso/nuevo-usuario-reso.component';
import { EvaluacionesSicComponent } from './roles/sic/evaluaciones/evaluaciones-sic.component';
import { EvaluacionSicComponent } from './roles/sic/evaluacion/evaluacion-sic.component';
import { ActaSpComponent } from './roles/sp/acta-ips/acta-sp-ips.component';
import { ActaSpProComponent } from './roles/sp/acta-pro/acta-sp-pro.component';
import { ActaPamecComponent } from './roles/pamec/acta/acta-pamec.component';
import { EvaluacionesSpProComponent } from './roles/sp/eva-pro/evaluaciones-sp-pro.component';
import { EvaluacionesSpIpsComponent } from './roles/sp/eva-ips/evaluaciones-sp-ips.component';
import { EvaluacionesPamecComponent } from './roles/pamec/evaluaciones/evaluaciones-pamec.component';
import { ListaPrestadorComponent } from './prestador/lista-prestador.component';
import { NuevoPrestadorComponent } from './prestador/nuevo-prestador.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NuevoUsuarioAdminComponent } from './usuario/admin/nuevo-usuario-admin.component';
import { ListPipe } from './list.pipe';
import { CriteriosicComponent } from './usuario/admin/criteriosic/criteriosic.component';
import { CriteriopamecComponent } from './usuario/admin/criteriopamec/criteriopamec.component';
import { AgregarcrisicComponent } from './usuario/admin/criteriosic/agregarcrisic/agregarcrisic.component';
import { CriterioSpIpsComponent } from './usuario/admin/criterio-sp-ips/criterio-sp-ips.component';
import { AgregarcriIpsComponent } from './usuario/admin/criterio-sp-ips/agregarcri-ips/agregarcri-ips.component';
import { CriterioSpIndComponent } from './usuario/admin/criterio-sp-ind/criterio-sp-ind.component';
import { AgregarIndComponent } from './usuario/admin/criterio-sp-ind/agregar-ind/agregar-ind.component';
import { AgregarcripamComponent } from './usuario/admin/criteriopamec/agregarcripam/agregarcripam.component';
import { EditarcritpamComponent } from './usuario/admin/criteriopamec/editarcritpam/editarcritpam.component';
import { EditarcriteindComponent } from './usuario/admin/criterio-sp-ind/editarcriteind/editarcriteind.component';
import { EditarcriteipsComponent } from './usuario/admin/criterio-sp-ips/editarcriteipsaju/editarcriteips.component';
import { EditarcriteipsverifComponent } from './usuario/admin/criterio-sp-ips/editarcriteipsverif/editarcriteipsverif.component';
import { EditarcriteipsimplComponent } from './usuario/admin/criterio-sp-ips/editarcriteipsimpl/editarcriteipsimpl.component';
import { EditarcriteipsplanComponent } from './usuario/admin/criterio-sp-ips/editarcriteipsplan/editarcriteipsplan.component';
import { ListaVerificacionComponent } from './roles/reso/lista-verificacion/lista-verificacion.component';
import { EvaluacionSpIpsComponent } from './roles/sp/evaluacion-sp-ips/evaluacion-sp-ips.component';
import { EvaluacionSpProComponent } from './roles/sp/evaluacion-sp-pro/evaluacion-sp-pro.component';
import { EvaluacionPamecComponent } from './roles/pamec/evaluacion-pamec/evaluacion-pamec.component';
import { ResetpasswordComponent } from './auth/resetpassword/resetpassword.component';
import { CriterioestandarComponent } from './usuario/admin/criteriosic/criterioestandar/criterioestandar.component';
import { AgregarcriterioestandarComponent } from './usuario/admin/criteriosic/agregarcriterioestandar/agregarcriterioestandar.component';
import { EditarcriteriosicComponent } from './usuario/admin/criteriosic/editarcriteriosic/editarcriteriosic.component';
import { ModalsicComponent } from './roles/sic/evaluacion/modalsic/modalsic.component';


@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    AppComponent,
    PasswordcComponent,
    


    //USUARIOS
    ListaUsuarioComponent,
    NuevoUsuarioComponent,
    EditarUsuarioComponent,

    //SOGC
    HomeSicComponent,
    ActaSicComponent,
    HomeSpComponent,
    HomePamecComponent,
    HomeResoComponent,
    NuevoUsuarioSicComponent,
    NuevoUsuarioSpComponent,
    NuevoUsuarioPamecComponent,
    NuevoUsuarioResoComponent,
    EvaluacionesSicComponent,
    EvaluacionSicComponent,
    ActaSpComponent,
    ActaSpProComponent,
    ActaPamecComponent,
    EvaluacionesSpProComponent,
    EvaluacionesSpIpsComponent,
    EvaluacionesPamecComponent,
    ListaPrestadorComponent,
    NuevoPrestadorComponent,
    NuevoUsuarioAdminComponent,
    ListPipe,
    CriteriosicComponent,
    CriteriopamecComponent,
    AgregarcrisicComponent,
    CriterioSpIpsComponent,
    AgregarcriIpsComponent,
    CriterioSpIndComponent,
    AgregarIndComponent,
    AgregarcripamComponent,
    EditarcritpamComponent,
    EditarcriteindComponent,
    EditarcriteipsComponent,
    EditarcriteipsverifComponent,
    EditarcriteipsimplComponent,
    EditarcriteipsplanComponent,
    ListaVerificacionComponent,
    EvaluacionSpIpsComponent,
    EvaluacionSpProComponent,
    EvaluacionPamecComponent,
    ResetpasswordComponent,
    CriterioestandarComponent,
    AgregarcriterioestandarComponent,
    EditarcriteriosicComponent,
    ModalsicComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    PasswordModule,
    DropdownModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ModalModule
    

  ],
  providers: [interceptorProvider, BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
