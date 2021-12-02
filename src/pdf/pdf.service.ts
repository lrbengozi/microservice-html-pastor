import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pdf, PdfDocument } from './entities/pdf.entity';
import { randomBytes } from 'crypto';

@Injectable()
export class PdfService {
  constructor(@InjectModel(Pdf.name) private pdfModel: Model<PdfDocument>) {}

  update(
    id: string,
    updatePdfDto: { status: string; bufferPdf: any; updated_at: Date },
  ) {
    return this.pdfModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updatePdfDto,
      },
      {
        new: true,
      },
    );
  }

  async findOne(protocol: string) {
    const { _id, bufferHmll } = await this.pdfModel
      .findOne({ protocol })
      .exec();
    return {
      _id,
      bufferHmll,
    };
  }
}
