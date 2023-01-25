export class CumplimientoSicEstandarDto {
    cumpl_id?: number;
    cumpl_cumple: string;
    cumpl_observaciones: string;
    crie_id: number;
    pre_cod_habilitacion: string;
    

    constructor(cumpl_cumple: string, cumpl_observaciones: string, crie_id: number, pre_cod_habilitacion: string){
        this.cumpl_cumple = cumpl_cumple;
        this.cumpl_observaciones = cumpl_observaciones;
        this.crie_id = crie_id;
        this.pre_cod_habilitacion = pre_cod_habilitacion
    }
}