/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from "typeorm";
import { ServiciosEspecificadosResEntity } from "./servEspecificados.entity";
import { ServiciosResEntity } from "./servicios.entity";


@EntityRepository(ServiciosResEntity)
export class ServiciosResRepository extends Repository<ServiciosResEntity> {

}