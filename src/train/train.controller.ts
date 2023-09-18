import { Controller, Post, Res, HttpStatus, Body, Get, Param, NotFoundException, Delete, Query, Put, Patch } from '@nestjs/common';
import { TrainService } from "./train.service";

@Controller('train')
export class TrainController {

    constructor(private trainService: TrainService) { }


    // Get Trains /train
    @Get('/')
    async getTrains(@Res() res) {
        const trains = await this.trainService.getTrains();
        return res.status(HttpStatus.OK).json(trains);
    }
    // Update Train Seats train/:trainID?seats=1
    @Patch('/:trainID')
    async updateTrainSeats(@Res() res, @Param('trainID') trainID, @Query('seats') seats: number) {
        const updatedSeats = await this.trainService.updateTrainSeats(trainID, seats);
        if (!updatedSeats) throw new NotFoundException('train does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'seats updated Successfully',
            updatedSeats
        });
    }
}
