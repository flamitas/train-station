import { Controller, Post, Res, HttpStatus, Body, Get, Param, NotFoundException, Delete, Query, Put } from '@nestjs/common';
import { UserService } from "./user.service";

import { CreateUserDTO, LoginUserDTO } from "./dto/user.dto";

@Controller('user')
export class UserController {

    constructor(private userService: UserService) { }

    // Add User: /user/register
    @Post('/register')
    async createUser(@Res() res, @Body() createUserDTO: CreateUserDTO) {
        const user = await this.userService.createUser(createUserDTO);
        return res.status(HttpStatus.OK).json({
            message: 'User Successfully Created',
            user
        });
    }

    // login Users /user/login
    @Post('/login')
    async getUsers(@Res() res, @Body() loginUserDTO: LoginUserDTO) {
        const user = await this.userService.findUserByUsernameAndPassword(loginUserDTO.email, loginUserDTO.password);
        return res.status(HttpStatus.OK).json({
                message: 'User Successfully loged',
                user
            });
    }

}
