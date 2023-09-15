import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { UserModule } from './user/user.module';
import { TrainModule } from './train/train.module';
import { ReservationModule } from "./reservations/reservation.module";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://alexp2291997:752945@trains.6apjer5.mongodb.net/?retryWrites=true&w=majority'),
    UserModule,
    TrainModule,
    ReservationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }