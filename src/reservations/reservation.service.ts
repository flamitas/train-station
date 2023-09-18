import { Injectable } from '@nestjs/common';

import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { Reservation } from "./interfaces/reservation.interface";
import { CreateReservationDTO, } from "./dto/reservation.dto";

@Injectable()
export class ReservationService {

    constructor(@InjectModel('Reservation') private readonly reservationModel: Model<Reservation>) {}

    // filter by User
    async findReservationByUser(userId: string)  {
        const reservation = this.reservationModel.find({userId: userId
        });
    
        return reservation;
      }
    // Post a single reservation
    async createReservation(createReservationDTO: CreateReservationDTO): Promise<Reservation> {
        const newReservation = new this.reservationModel(createReservationDTO);
        return newReservation.save();
    }
    // cancel Reservation
    async cancelReservation(reservationID: string): Promise<Reservation> {
        const canceldReservation = this.reservationModel.findByIdAndUpdate(reservationID, {is_cancelled: true});
        return canceldReservation;
    }


    

}