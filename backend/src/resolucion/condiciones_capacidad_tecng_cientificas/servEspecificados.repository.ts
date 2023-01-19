/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from "typeorm";
import { ServiciosEspecificadosResEntity } from "./servEspecificados.entity";


@EntityRepository(ServiciosEspecificadosResEntity)
export class ServiciosEspecificadosRepository extends Repository<ServiciosEspecificadosResEntity> {

}