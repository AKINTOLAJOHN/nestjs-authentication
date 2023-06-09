import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
// import { MailModule } from './mail/mail.module';
import { MailModule } from './mail/mail.module';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal : true
    }),
    UserModule, 
    AuthModule, 
    PrismaModule, MailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
