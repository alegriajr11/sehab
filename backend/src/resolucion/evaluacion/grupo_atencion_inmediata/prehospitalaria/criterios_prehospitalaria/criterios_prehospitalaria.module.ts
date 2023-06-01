import { Module } from '@nestjs/common';
import { CriteriosPrehospitalariaService } from './criterios_prehospitalaria.service';
import { CriteriosPrehospitalariaController } from './criterios_prehospitalaria.controller';
import { CriterioPrehospitalariaEntity } from '../criterio_prehospitalaria.entity';
import { PrehospitalariaEntity } from '../prehospitalaria.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([CriterioPrehospitalariaEntity, PrehospitalariaEntity])],
    controllers: [CriteriosPrehospitalariaController],
    providers: [CriteriosPrehospitalariaService],
    exports: [CriteriosPrehospitalariaService]
  
})
export class CriteriosPrehospitalariaModule {}
