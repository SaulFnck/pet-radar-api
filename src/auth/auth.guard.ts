import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { TokenService } from './token/token.service';

@Injectable()
export class AuthGuard implements CanActivate {

constructor(private tokenService: TokenService){}

 async canActivate(
    context: ExecutionContext,
  ){
    const request = context.switchToHttp().getRequest()
    const token = request.headers.authorization?.replace("Bearer", "");
    console.log(token);
    const userId = await this.tokenService.getUserId(token); 
    request.user
    return true
  }
  }

