export const environment = {
  production: true,
  API_URL: 'http://localhost:8080',

  //USUARIOS
  usuarioURL: 'http://localhost:8080/usuario/',
  usuarioNewURL: 'http://localhost:8080/auth/nuevo/',
  authURL: 'http://localhost:8080/auth/',
  //authURL: 'http://192.168.1.6:8080/auth/',
  restablecerContraseña: 'http://localhost:8080/auth/request-reset-password/',
  prestadorURL: 'http://localhost:8080/prestador/',
  prestadorMunicipioURL: 'http://localhost:8080/prestador/mun/',
  prestadorPamecMunicipioURL: 'http://localhost:8080/prestador/mun/pamec/',
  rolURL: 'http://localhost:8080/rol/',
  claseURL: 'http://localhost:8080/clase/',
  generarPdfURL: 'http://localhost:8080/generarpdf/usuarios/',


  //SIC
  criterioSicURL: 'http://localhost:8080/criteriosic/',
  indicadorURL: 'http://localhost:8080/indicador/',
  criterios_URL: 'http://localhost:8080/criterio/',
  criterioURL: 'http://localhost:8080/criteriosic/criterio/',
  cumplimientoEstandarURL: 'http://localhost:8080/criteriosic-cumplimiento/estandar/',
  cumpleEstandarURL: 'http://localhost:8080/criteriosic-cumplimiento/cumple/',

  //EVALUACION-SIC
  evaluacionSicUrl: 'http://localhost:8080/evaluacion-sic/',

  //SIC-PDF
  actaSic_pdf_URL: 'http://localhost:8080/sic-acta/',


  //PAMEC
  actividadURL: 'http://localhost:8080/actividad/',
  criteriopamURL: 'http://localhost:8080/criteriopam/',
  criteriopam1URL: 'http://localhost:8080/criteriopam/criterio/',
  //ACTA PAMEC
  actaPamec_pdf_url: 'http://localhost:8080/pamec-acta/',

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

  //SP-PDF
  actaSpIps_pdf_URL: 'http://localhost:8080/sp-ips/',
  actaSpInd_pdf_URL: 'http://localhost:8080/sp-independientes/',



  //RESOLUCIÓN 3100/2019
  todos_serviciosURL: 'http://localhost:8080/criterio-servicios/',
  //ACTA-VERIFICACION
  actaVerificacion: 'http://localhost:8080/verificacion/',

  //PRESTADOR
  municipioURL: 'http://localhost:8080/municipio/',
  clasificacionURL: 'http://localhost:8080/clasificacion/',
  tipoURL: 'http://localhost:8080/tipo/',
  prestadorIpsMunicipioURL: 'http://localhost:8080/prestador/mun/sp/ips',
  prestadorIndMunicipioURL: 'http://localhost:8080/prestador/mun/sp/pro/ips',
  //SEDES - PRESTAOR
  sedeURL: 'http://localhost:8080/sede/',

  //AUDITORIA
  auditoriaUrl: 'http://localhost:8080/auditoria-registro/'
};
