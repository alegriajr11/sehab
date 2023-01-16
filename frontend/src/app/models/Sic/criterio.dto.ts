export class Criterio {
    cri_id?: number;
    cri_nombre: string;
    indicadores: {ind_id:number};
    

    constructor(cri_id: number, cri_nombre: string, indicadores: {ind_id:number}){
        this.cri_id = cri_id;
        this.cri_nombre = cri_nombre;
        this.indicadores = indicadores;
    }
}