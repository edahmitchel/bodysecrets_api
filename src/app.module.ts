import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      //  make config accessible to all modules
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`
    }), MongooseModule.forRoot(process.env.MONGO_URI)

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
