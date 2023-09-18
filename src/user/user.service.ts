import { Injectable } from '@nestjs/common';

import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { User } from "./interfaces/user.interface";
import { CreateUserDTO } from "./dto/user.dto";
import { encondePassword, comparePassword } from 'src/utils/bcrypt';

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async getUsers(): Promise<User[]> {
        const users = this.userModel.find();
        return users;
    }
    // validation user
    async findUserByUsernameAndPassword(email: string, password: string): Promise<User> {
        
        const user = await this.userModel.findOne({
          email: email
        });
        const matched = comparePassword(password, user.password)
        if (matched) {
            return user;
        }
        
      }
// Post a single user
    async createUser(createUserDTO: CreateUserDTO)  {
        const password = encondePassword(createUserDTO.password); 
        console.log(password)
        const newUser = new this.userModel({...createUserDTO, password});
        return newUser.save();
    }
    

}