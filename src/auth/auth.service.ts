import { Injectable } from '@nestjs/common';
import { User } from './user.type';

@Injectable()
export class AuthService {
    private users: User[] = [{
        firstName: "Matin",
        lastName: "Askari",
        username: "mtn",
        age: 21,
        phoneNumber: 9136870393,
        role: "user",
        password: "1234"
    },
    {
        firstName: "Ali",
        lastName: "Ahmadi",
        username: "ali",
        age: 30,
        phoneNumber: 9398791213,
        role: "admin",
        password: "5678"
    }];

    login(username: string, password: string): User {
        return this.users.find(user => user.username === username && user.password === password);;
    }
}
