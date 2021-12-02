import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { IDataPdf } from './types';

@Controller('pdf')
export class PdfController {
  @EventPattern('pdf')
  async pdf(data: IDataPdf) {
    console.log('MicroService DATA >>>>');
    console.log(data);
  }
}
