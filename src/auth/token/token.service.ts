import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class TokenService {

    constructor(private jwtservice: JwtService){}

    async generate(userId:number) : Promise<string>{
        const token = await this.jwtservice.signAsync({ id: userId });
        return token;
    }

    async getUserId(token:string){
        const payload = await this.jwtservice.verifyAsync(token);
        return payload.id; 
    }
}
