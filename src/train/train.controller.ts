import { Controller, Post, Res, HttpStatus, Body, Get, Param, NotFoundException, Delete, Query, Put } from '@nestjs/common';
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
}
