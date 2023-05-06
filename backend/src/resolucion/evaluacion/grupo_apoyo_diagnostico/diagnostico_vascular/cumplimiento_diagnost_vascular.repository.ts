import { EntityRepository, Repository } from "typeorm";
import { CumplimientoDiagnosticoVascularEntity } from "./cumplimiento_diagnost_vascular.entity";



@EntityRepository(CumplimientoDiagnosticoVascularEntity)
export class CumplimientoDiagnostVascularRepository extends Repository<CumplimientoDiagnosticoVascularEntity> {

}