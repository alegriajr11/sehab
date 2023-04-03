// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  //USUARIOS
  usuarioURL: 'http://localhost:8080/usuario/',
  usuarioNewURL: 'http://localhost:8080/auth/nuevo/',
  authURL: 'http://localhost:8080/auth/',
  restablecerContraseña: 'http://localhost:8080/auth/request-reset-password/',
  prestadorURL: 'http://localhost:8080/prestador/',
  prestadorMunicipioURL: 'http://localhost:8080/prestador/mun/',
  prestadorPamecMunicipioURL: 'http://localhost:8080/prestador/mun/pamec/',
  rolURL:'http://localhost:8080/rol/',
  claseURL: 'http://localhost:8080/clase/',
  generarPdfURL: 'http://localhost:8080/generarpdf/usuarios/',

//SIC
  criterioSicURL: 'http://localhost:8080/criteriosic/',
  indicadorURL: 'http://localhost:8080/indicador/',
  criterios_URL: 'http://localhost:8080/criterio/',
  criterioURL: 'http://localhost:8080/criteriosic/criterio/',
  cumplimientoEstandarURL: 'http://localhost:8080/criteriosic-cumplimiento/estandar/',
  cumpleEstandarURL: 'http://localhost:8080/criteriosic-cumplimiento/cumple/',
  
  

//PAMEC
  actividadURL: 'http://localhost:8080/actividad/',
  criteriopamURL: 'http://localhost:8080/criteriopam/',
  criteriopam1URL: 'http://localhost:8080/criteriopam/criterio/',

//SEGURIDAD DEL PACIENTE - PROFESIONALES INDEPENDIENTE
  etapaURL: 'http://localhost:8080/sp-ind/',
  criterioindURL: 'http://localhost:8080/criterioind/',
  criteindURL: 'http://localhost:8080/criterioind/criterio/',


//SEGURIDAD DEL PACIENTE - IPS
  evaluacionipsURL: 'http://localhost:8080/evaluacionips/',
  itemipsURL: 'http://localhost:8080/itemips/',
  planeacionURL: 'http://localhost:8080/planeacion/',
  planeacionOneURL: 'http://localhost:8080/planeacion/criterio/',
  implementacionURL: 'http://localhost:8080/criterioimple/',
  implementacionOneURL: 'http://localhost:8080/criterioimple/implementacion/',
  ajusteURL: 'http://localhost:8080/criterioajuste/',
  ajusteDetailURL: 'http://localhost:8080/criterioajuste/ajuste/',
  verificacionURL: 'http://localhost:8080/criterioverif/',
  verificacionOneURL: 'http://localhost:8080/criterioverif/verificacion/',

//PRESTADOR
  municipioURL: 'http://localhost:8080/municipio/',
  clasificacionURL: 'http://localhost:8080/clasificacion/',
  tipoURL: 'http://localhost:8080/tipo/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
