import { Injectable } from '@nestjs/common';
import { buffer } from 'rxjs';
import * as Excel from 'excel4node';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class GenerarExcelService {
    //constructor(private readonly usuarioService: UsuarioService) { }

    async generarExcelUsuarios(): Promise<Buffer> {

        const ws = new Excel.Workbook();
        const wb = ws.addWorksheet('Usuarios');

        let usuarios = [
            {
                nombre: "daniel",
                apellido: "perez",
                edad: 27,
                id: 45345645,
                telefono: 344564576,
                correo: "daniel@gmail.com",
            },
            {
                nombre: "Pedro",
                apellido: "suarez",
                edad: 25,
                id: 45345645111,
                telefono: 3445645722226,
                correo: "petro@gmail.com",
            },
            {
                nombre: "alejandra",
                apellido: "ospina",
                edad: 29,
                id: 453456434235,
                telefono: 3445234236457,
                correo: "alejandra@gmail.com",
            },
            {
                nombre: "gabriel",
                apellido: "arias",
                edad: 22,
                id: 4534564523423,
                telefono: 3445645734236,
                correo: "gabriel@gmail.com",
            },
            {
                nombre: "camilo",
                apellido: "buitrago",
                edad: 28,
                id: 4534523645,
                telefono: 3445645712316,
                correo: "camilo@gmail.com",
            },
            {
                nombre: "sebastian",
                apellido: "garcia",
                edad: 29,
                id: 453456412315,
                telefono: 34456123124576,
                correo: "sebastian@gmail.com",
            },
        ];

        // Define el estilo del encabezado
        var cualColumnaEstilo = ws.createStyle({
            font: {
                name: 'Arial',
                color: '#000000',
                size: 12,
                bold: true,
            }
        });
    
        //crar estilo
        var contenidoEstilo = ws.createStyle({
            font: {
                name: 'Arial',
                color: '#494949',
                size: 11,
            }
        });

       //nombre de las columnas

    wb.cell(1, 1).string("Nombre").style(cualColumnaEstilo);
    wb.cell(1, 2).string("Apellido").style(cualColumnaEstilo);
    wb.cell(1, 3).string("Edad").style(cualColumnaEstilo);
    wb.cell(1, 4).string("Id").style(cualColumnaEstilo);
    wb.cell(1, 5).string("Telefono").style(cualColumnaEstilo);
    wb.cell(1, 6).string("Correo").style(cualColumnaEstilo);

    let cualFila = 2;

    for(let i=0; i<usuarios.length; i++){

        let usuarioActual = usuarios[i]; // cada posición del arreglo

        // Nombre
        wb.cell(cualFila, 1).string(usuarioActual.nombre).style(contenidoEstilo);
        // apellido
        wb.cell(cualFila, 2).string(usuarioActual.apellido).style(contenidoEstilo);
        // edad
        wb.cell(cualFila, 3).number(usuarioActual.edad).style(contenidoEstilo);
        // id
        wb.cell(cualFila, 4).number(usuarioActual.id).style(contenidoEstilo);
        // teléfono
        wb.cell(cualFila, 5).number(usuarioActual.telefono).style(contenidoEstilo);
        // correo
        wb.cell(cualFila, 6).string(usuarioActual.correo).style(contenidoEstilo);

        // Aumenta de fila
        cualFila = cualFila + 1;
    }
        
        // Genera el archivo Excel en un buffer
        const buffer = await ws.workbook.xlsx.writeBuffer();

        return buffer;
    }
}

