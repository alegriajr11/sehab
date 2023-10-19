import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { VerificacionService } from './verificacion.service';
import { JwtAuthGuard } from 'src/guards/jwt.guard';

@Controller('verificacion')
export class VerificacionController {

	constructor(private readonly acta_verificacion_Service: VerificacionService) { }


	//ÚLTIMA ACTA_VERIFICACION
	// @UseGuards(JwtAuthGuard)
	@Get('ultima')
	async getLastActa(@Query('tipo_visita') tipo_visita: string) {
		return this.acta_verificacion_Service.getLastActa(tipo_visita);
	}
}
