import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) { }

  async generateJwtToken(userId: number) {
    const payload = { sub: userId };
    return this.jwtService.sign(payload);
  }

  async validateUserById(userId: number) {
    // Implementirajte logiku za validaciju korisnika na temelju userId-a
    // Na primjer, možete provjeriti bazu podataka ili bilo koji drugi izvor podataka
    // i vratiti korisničke podatke ako je korisnik valjan, inače baciti iznimku ako nije.
  }
}
