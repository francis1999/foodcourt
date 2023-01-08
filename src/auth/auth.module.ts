import {Module} from '@nestjs/common';
import { AuthController } from './auth.Controller';
import { AuthService } from './auth.Service';


@Module({
    controllers: [AuthController],
    providers:[AuthService]
})
export class AuthModule {

}