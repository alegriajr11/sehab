import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ActaVerificacionEntity } from './acta-verificacion.entity';
import { ActaCerificacionRepository } from './acta-verificacion.repository';
import { PrestadorEntity } from 'src/prestador/prestador.entity';
import { PrestadorRepository } from 'src/prestador/prestador.repository';
import { MessageDto } from 'src/common/message.dto';
import { retry } from 'rxjs';

@Injectable()
export class VerificacionService {

	constructor(
		@InjectRepository(ActaVerificacionEntity)
		private readonly acta_verificacion_pdfRepository: ActaCerificacionRepository,
		@InjectRepository(PrestadorEntity)
		private readonly prestadorRepository: PrestadorRepository,
	) { }

	//LISTAR ULTIMO ACTA_ID POR TIPO DE VISITA
	async getLastActa(tipo_visita: string): Promise<ActaVerificacionEntity> {
		const anioActual: number = new Date().getFullYear();

		if (tipo_visita === 'previa') {
			const actaPrevia = await this.acta_verificacion_pdfRepository.createQueryBuilder('acta_previa')
				.select('acta_previa')
				.where('acta_previa.act_visita_previa LIKE :valor', { valor: '%X%' })
				.orderBy('acta_previa.act_id', 'DESC')
				.getOne();

			if (!actaPrevia) {
				// Si no existe acta previa
				const newActaPrevia = new ActaVerificacionEntity();
				newActaPrevia.act_id = 1;
				return newActaPrevia;
			}

			if (actaPrevia) {
				actaPrevia.act_creado = new Date(actaPrevia.act_creado);
				if (actaPrevia.act_creado.getFullYear() === anioActual) {
					actaPrevia.act_id++;
				} else {
					actaPrevia.act_id = 1;
				}
				return actaPrevia;
			}
		}

		if (tipo_visita === 'seguimiento') {
			const actaSeguimiento = await this.acta_verificacion_pdfRepository.createQueryBuilder('acta_seguimiento')
				.select('acta_seguimiento')
				.where('acta_seguimiento.act_visita_seguimiento LIKE :valor', { valor: '%X%' })
				.orderBy('acta_seguimiento.act_id', 'DESC')
				.getOne();

			if (!actaSeguimiento) {
				// Si no existe acta Seguimiento (CERTIFICACION)
				const newActaSeguimiento = new ActaVerificacionEntity();
				newActaSeguimiento.act_id = 1;
				return newActaSeguimiento;
			}

			if (actaSeguimiento) {
				actaSeguimiento.act_creado = new Date(actaSeguimiento.act_creado);
				if (actaSeguimiento.act_creado.getFullYear() === anioActual) {
					actaSeguimiento.act_id++;
				} else {
					actaSeguimiento.act_id = 1;
				}
				return actaSeguimiento;
			}
		}
		if (tipo_visita === 'reactivacion') {
			const actaReactivacion = await this.acta_verificacion_pdfRepository.createQueryBuilder('acta_reactivacion')
				.select('acta_reactivacion')
				.where('acta_reactivacion.act_visita_reactivacion LIKE :valor', { valor: '%X%' })
				.orderBy('acta_reactivacion.act_id', 'DESC')
				.getOne();

			if (!actaReactivacion) {
				// Si no existe acta reactivacion
				const newActaReactivacion = new ActaVerificacionEntity();
				newActaReactivacion.act_id = 1;
				return newActaReactivacion;
			}

			if (actaReactivacion) {
				actaReactivacion.act_creado = new Date(actaReactivacion.act_creado);
				if (actaReactivacion.act_creado.getFullYear() === anioActual) {
					actaReactivacion.act_id++;
				} else {
					actaReactivacion.act_id = 1;
				}
				return actaReactivacion;
			}
		}

	}

	
}
