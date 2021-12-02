import { Module } from '@nestjs/common';
import { PdfController } from './pdf.controller';

@Module({
  controllers: [PdfController],
  providers: [],
})
export class PdfModule {}
