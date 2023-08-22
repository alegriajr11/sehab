import { Controller } from '@nestjs/common';
import { Get, Res } from '@nestjs/common/decorators';
import { GenerarpdfService } from './generarpdf.service';



@Controller('generarpdf')
export class GenerarpdfController {

    constructor(
        private readonly generarPdfService: GenerarpdfService,
        
    ) { }

    //DECORADOR SOLICITANDO SERVICIO GENERAR PDF
    @Get('usuarios')
    async descargarPdf(@Res() res): Promise<void> {
        const buffer = await this.generarPdfService.generarPdfUsuarios()

        res.setHeader('Content-Disposition', 'attachment; filename="usuarios_sogcs.pdf"');
        res.set({
            'Content-Length': buffer.length,
        })
        res.end(buffer)
    }

    //DECORADOR SOLICITANDO SERVICIO GENERAR PDF - EVALUACION SIC
    @Get('sic/evaluacion')
    async descargarPdfEvaluacionSic(@Res() res): Promise<void> {
        const buffer = await this.generarPdfService.generarPdfEvaluacionEstandarSic()

        res.setHeader('Content-Disposition', 'attachment; filename="evaluacion_sic_sogcs.pdf"');
        res.set({
            'Content-Length': buffer.length,
        })
        res.end(buffer)
    }

    @Get('sp/ind/evaluacion')
    async descargarPdfCriterioInd(@Res() res): Promise<void> {
        const buffer = await this.generarPdfService.generarPdfEvaluacionInd()

        res.setHeader('Content-Disposition', 'attachment; filename="evaluacion_sp_ind_sogcs.pdf"');
        res.set({
            'Content-Length': buffer.length,
        })
        res.end(buffer)
    }
    
    @Get('pamec/evaluacion')
    async descargarPdfCriterioPamec(@Res() res): Promise<void> {
        const buffer = await this.generarPdfService.generarPdfEvaluacionPamec()

        res.setHeader('Content-Disposition', 'attachment; filename="evaluacion_sp_ind_sogcs.pdf"');
        res.set({
            'Content-Length': buffer.length,
        })
        res.end(buffer)
    }

}
