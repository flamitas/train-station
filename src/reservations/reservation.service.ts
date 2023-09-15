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
    // Delete Reservation
    async deleteReservation(reservationID: string): Promise<any> {
        const deletedReservation = this.reservationModel.findByIdAndDelete(reservationID);
        return deletedReservation;
    }
    

}