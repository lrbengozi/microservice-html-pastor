import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { PdfModule } from './pdf/pdf.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URL), PdfModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
