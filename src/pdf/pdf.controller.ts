import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { PdfService } from './pdf.service';
import { htmlPastor } from './utils/htmlToPdf';

@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @EventPattern('pdf')
  async pdf(protocol: string) {
    console.log(`Iniciando o processmento do PDF: ${protocol}`);

    const { _id, bufferHmll } = await this.pdfService.findOne(protocol);

    const respone = await htmlPastor(bufferHmll);

    await this.pdfService.update(_id, {
      bufferPdf: respone,
      status: 'PROCESSADO',
      updated_at: new Date(),
    });

    console.log('Processamento finalizado');
  }
}
