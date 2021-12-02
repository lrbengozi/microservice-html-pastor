import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PdfService } from './pdf.service';
import { PdfController } from './pdf.controller';
import { Pdf, PdfSchema } from './entities/pdf.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Pdf.name, schema: PdfSchema }])],
  controllers: [PdfController],
  providers: [PdfService],
})
export class PdfModule {}
