import { Controller, Post, Res, HttpStatus, Body, Get, Param, NotFoundException, Delete, Query, Put } from '@nestjs/common';
import { ReservationService } from "./reservation.service";

import { CreateReservationDTO } from "./dto/reservation.dto";

@Controller('reservation')
export class ReservationController {

    constructor(private reservationService: ReservationService) { }

    // GET single reservations by user id: /reservations/6503a5e32cf39242ebda22b9
    @Get('/:userID')
    async getReservations(@Res() res, @Param('userID') userID) {
        const reservations = await this.reservationService.findReservationByUser(userID);
        if (!reservations) throw new NotFoundException('Do you not have any reservation!');
        return res.status(HttpStatus.OK).json(reservations);
    }
    
    // Add Reservation: /reservation/create
    @Post('/create')
    async createReservation(@Res() res, @Body() createReservationDTO: CreateReservationDTO) {
        const reservation = await this.reservationService.createReservation(createReservationDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Reservation Successfully Created',
            reservation
        });
    }

    // Delete reservation
    @Delete('/:reservationID/delete')
    async deleteProduct(@Res() res, @Param('reservationID') reservationID) {
        const reservationDeleted = await this.reservationService.deleteReservation(reservationID);
        if (!reservationDeleted) throw new NotFoundException('reservation does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'reservation Deleted Successfully',
            reservationDeleted
        });
    }

}
