import { Controller, Get } from '@nestjs/common';
import { CalificacionpamecService } from './calificacionpamec.service';

@Controller('calificacionpamec')
export class CalificacionpamecController {
    constructor(
        private readonly calificacionpamecService: CalificacionpamecService
    ) { }

    @Get('estan')
    async getAllestandar() {
        return await this.calificacionpamecService.getall()
    }

}
