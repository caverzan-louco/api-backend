import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './users/user.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', // ou 127.0.0.1
      port: 3306,
      username: 'root',
      password: '1234', // <-- MUITO IMPORTANTE: Coloque a senha que você configurou na instalação do MySQL
      database: 'products4', // O nome do banco que criamos no Workbench
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Encontra as entidades automaticamente
      synchronize: true, // Apenas para desenvolvimento! Cria as tabelas automaticamente.
    }),
    ProductsModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}