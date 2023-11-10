import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { ServiciosVerificadosEntity } from '../servicios_verificados.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiciosVerificadosRepository } from '../servicios_verificados.repository';
import { PrestadorEntity } from 'src/prestador/prestador.entity';
import { PrestadorRepository } from 'src/prestador/prestador.repository';
import { MessageDto } from 'src/common/message.dto';
import { ServiciosVerificadosDto } from 'src/resolucion/dtos/servicios_capacidad_dto/servicios_verificados.dto';

@Injectable()
export class ServiciosVerificadosService {
    constructor(
        @InjectRepository(ServiciosVerificadosEntity)
        private readonly serviciosVerificadosRepository: ServiciosVerificadosRepository,
        @InjectRepository(PrestadorEntity)
        private readonly prestadorRepository: PrestadorRepository,
    ) { }

    //LISTANDO SERVICIOS POR PRESTADOR
async getServicioForPrestador(id: string): Promise<ServiciosVerificadosEntity[]> {
    const servicio_prestador = await this.serviciosVerificadosRepository.createQueryBuilder('servicio')
    .select(['servicio', 'prestador.pre_nombre'])
    .innerJoin('servicio.prestador', 'prestador')
    .where('prestador.pre_cod_habilitacion = :servi_pres', { servi_pres : id})
    .getMany()
    if (!servicio_prestador) throw new NotFoundException(new MessageDto('No Existe en la lista'))
    return servicio_prestador
}

//METODO AGREGAR CASPACIDAD
async create(pre_cod_habilitacion: string, dto: ServiciosVerificadosDto): Promise<any> {
    const servicio_prestador = await this.prestadorRepository.findOne({ where: { pre_cod_habilitacion: pre_cod_habilitacion} });
    if (!servicio_prestador) throw new InternalServerErrorException(new MessageDto('El Prestador no ha sido creado'))
    //CREAMOS EL DTO PARA TRANSFERIR LOS DATOS
    const servicioverificado = this.serviciosVerificadosRepository.create(dto)
    //ASIGNAMOS EL PRESTADOR AL SERVICIO
    //GUARDAR LOS DATOS EN LA BD
    await this.serviciosVerificadosRepository.save(servicioverificado)
    return new MessageDto('La capacidad ha sido Creada Correctamente');
}

//ENCONTRAR POR ID - CAPACIDAD INSTALADA
async findById(ser_id: number): Promise<ServiciosVerificadosEntity> {
    const servi_verificada = await this.serviciosVerificadosRepository.findOne({ where: { ser_id } });
    if (!servi_verificada) {
        throw new NotFoundException(new MessageDto('el servicio No Existe'));
    }
    return servi_verificada;
}

//ELIMINAR CRITERIO DIAGNOSTICO VASCULAR
async delete(id: number): Promise<any> {
    const servi_verificada = await this.findById(id);
    await this.serviciosVerificadosRepository.delete(servi_verificada.ser_id)
    return new MessageDto(`Servicio Eliminado`);
}

//ACTUALIZAR CRITERIOS DIAGNOSTICO VASCULAR
async updateservico(id: number, dto: ServiciosVerificadosDto): Promise<any> {
    const servicio_verificada = await this.findById(id);
    if (!servicio_verificada) {
        throw new NotFoundException(new MessageDto('El servicio no existe'))
    }
    dto.ser_codigo ? servicio_verificada.ser_codigo = dto.ser_codigo : servicio_verificada.ser_codigo = servicio_verificada.ser_codigo;
    await this.serviciosVerificadosRepository.save(servicio_verificada);

    return new MessageDto(`El servicio ha sido Actualizado`);

}
}
