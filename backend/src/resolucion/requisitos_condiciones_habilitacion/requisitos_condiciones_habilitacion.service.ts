import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConceptoResEntity } from './concepto_res.entity';
import { ConceptoResRepository } from './concepto_res.repository';

@Injectable()
export class RequisitosCondicionesHabilitacionService {

    constructor(
        @InjectRepository(ConceptoResEntity)
        private readonly concepto3100Repository: ConceptoResRepository
    ) { }


    //LISTAR TODAS LAS CONDICIONES
    async getAllCondiciones(): Promise<ConceptoResEntity[]> {
        const condiciones = await this.concepto3100Repository.createQueryBuilder('condiciones')
            .select(['condiciones'])
            .getMany();
        return condiciones;

    }

    //CREAR CUMPLIMIENTO POR CUMPLIMIENTO HABILITACIÓN
}
