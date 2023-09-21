import { Controller, Get } from '@nestjs/common';
import { AuditoriaRegistroService } from './auditoria_registro.service';

@Controller('auditoria-registro')
export class AuditoriaRegistroController {

	//{"statusCode":404,"message":"Cannot GET /auditoria-registro/all/auditorias/list","error":"Not Found"}

	constructor(
        private readonly audiroriaRegistroService: AuditoriaRegistroService
    ) { }

	@Get('/all/auditorias/list')
    getAll() {
        return this.audiroriaRegistroService.getAllAuditorias();
    }
}
