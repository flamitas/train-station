import { Injectable } from '@nestjs/common';

import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { Train } from "./interfaces/train.interface";

@Injectable()
export class TrainService {

    constructor(@InjectModel('Train') private readonly trainModel: Model<Train>) {}

    // Get all trains
    async getTrains(): Promise<Train[]> {
        const trains = this.trainModel.find();
        return trains;
    }
    // Get a single Train
    async getTrain(trainID: string): Promise<Train> {
        const train = this.trainModel.findById(trainID); 
        return train;
    }
    // update seats
    async updateTrainSeats(trainID: string, seats: number): Promise<Train> {
        const train = this.getTrain(trainID);
        const updatedSeats = await this.trainModel.findByIdAndUpdate(trainID, {availability: ((await train).availability+seats)});
        return updatedSeats;
    }


}