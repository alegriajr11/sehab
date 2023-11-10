import { EntityRepository, Repository } from "typeorm";
import { ModalidadEntity } from "./modalidad.entity";


@EntityRepository(ModalidadEntity)
export class ModalidadRepository extends Repository<ModalidadEntity> {

}