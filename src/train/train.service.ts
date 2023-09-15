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
    


}