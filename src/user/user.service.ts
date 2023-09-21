import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDto } from './user.dto';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async registerUser(userDto: UserDto) {
    try {
      // Proverite da li korisnik već postoji u bazi prema email adresi
      const existingUser = await this.userRepository.findOne({
        where: { email: userDto.email },
      });

      if (existingUser) {
        throw new Error('Korisnik već postoji.');
      }

      // Kreirajte novog korisnika koristeći podatke iz userDto
      const newUser = this.userRepository.create(userDto);

      // Sačuvajte novog korisnika u bazi
      const savedUser = await this.userRepository.save(newUser);

      return savedUser;
    } catch (error) {
      throw new Error('Greška prilikom registracije korisnika.');
    }
  }

  async loginUser(userDto: UserDto) {
    try {
      // Pronađite korisnika u bazi prema email adresi
      const user = await this.userRepository.findOne({
        where: { email: userDto.email },
      });

      if (!user) {
        throw new NotFoundException('Korisnik nije pronađen.');
      }

      // Ovde treba implementirati proveru lozinke korisnika
      // Na primer, uporedite unetu lozinku sa lozinkom u bazi
      // Ako lozinke odgovaraju, možete generisati JWT token za korisnika i vratiti ga

      // Primer generisanja JWT tokena (koristite vašu tajnu ključ za potpis)
      // const token = generateJwtToken(user.id);

      // Vratite token kao odgovor
      // return { token };
    } catch (error) {
      throw new Error('Greška prilikom prijave korisnika.');
    }
  }

  async getUserById(id: number) {
    try {
      const user = await this.userRepository.findOne({ where: { id } });

      if (!user) {
        throw new NotFoundException('Korisnik nije pronađen.');
      }

      return user;
    } catch (error) {
      throw new Error('Greška prilikom dohvaćanja korisnika.');
    }
  }

  async updateUser(id: number, userDto: UserDto) {
    try {
      // Pronađite korisnika prema ID-u
      const user = await this.userRepository.findOne({ where: { id } });

      if (!user) {
        throw new NotFoundException('Korisnik nije pronađen.');
      }

      // Ažurirajte korisničke podatke iz userDto
      Object.assign(user, userDto);

      // Sačuvajte promene u bazi
      await this.userRepository.save(user);

      return user;
    } catch (error) {
      throw new Error('Greška prilikom ažuriranja korisnika.');
    }
  }

  async deleteUser(id: number) {
    try {
      // Pronađite korisnika prema ID-u
      const user = await this.userRepository.findOne({ where: { id } });

      if (!user) {
        throw new NotFoundException('Korisnik nije pronađen.');
      }

      // Izbrišite korisnika iz baze
      await this.userRepository.remove(user);

      return user;
    } catch (error) {
      throw new Error('Greška prilikom brisanja korisnika.');
    }
  }
}
