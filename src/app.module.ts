import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProblemReportModule } from './problem-report/problem-report.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Tip baze podataka (npr. mysql, postgres, sqlite,kod nas sam stavio da je to sql maki ...)
      host: 'localhost', // Adresa servera baze podataka
      port: 3306, // Port baze podataka
      username: 'root', // Korisničko ime baze podataka
      password: 'password', // Lozinka baze podataka
      database: 'mydb', // Ime baze podataka
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Putanja do entiteta
      synchronize: true, // Postavljanje na `false` u produkcionom okruženju
    }),
    UserModule,
    AuthModule,
    ProblemReportModule,
    JwtModule.register({
      secret: 'your-secret-key', // Tajni ključ za JWT enkripciju (promenite ovo) kad bude vakat kljuc treba bas da bude komplikovan
      signOptions: { expiresIn: '1h' }, // Vreme isteka JWT tokena stavio sam sat pa sad jbg pisi maki koliko da traje
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
