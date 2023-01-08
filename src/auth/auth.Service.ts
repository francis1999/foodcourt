import {Injectable} from '@nestjs/common';




@Injectable({})
export class AuthService{
    signup(){
        return "hello sign up"
    }
    login(){
        return "hello login"
    }
}