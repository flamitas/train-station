import { Injectable } from '@nestjs/common';

import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { User } from "./interfaces/user.interface";
import { CreateUserDTO } from "./dto/user.dto";

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async getUsers(): Promise<User[]> {
        const users = this.userModel.find();
        return users;
    }
    // validation user
    async findUserByUsernameAndPassword(email: string, password: string): Promise<User> {
        const user = this.userModel.findOne({
          email: email,
          password: password,
        });
    
        return user;
      }
// Post a single user
    async createUser(createUserDTO: CreateUserDTO): Promise<User> {
        const newUser = new this.userModel(createUserDTO);
        return newUser.save();
    }
    

}