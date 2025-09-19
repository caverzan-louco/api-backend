// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../users/user.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';


@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: 'SEU_SEGREDO_SUPER_SECRETO', // Mude isso em produção!
      signOptions: { expiresIn: '4m' },
    }),
  ],
  providers: [AuthService, JwtStrategy], // Adicionaremos a Strategy aqui depois
  controllers: [AuthController],
})
export class AuthModule {}