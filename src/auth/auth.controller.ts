import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto, AuthInDto } from './dto';

@Controller('auth')
export class AuthController {

    constructor(

        private authService : AuthService

    ){}

    @HttpCode(HttpStatus.OK)
    @Post('signin')
    login(@Body() dtoin : AuthInDto){

        return this.authService.login(dtoin)

    }

    @Post('signup')
    signup(@Body() dto : AuthDto){
        
        return this.authService.signup(dto)
        
    }


}
