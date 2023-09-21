// src/entities/dto/user.dto.ts

import { IsNotEmpty, IsEmail } from 'class-validator';

export class UserDto {
  readonly id: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  // Dodajte ostala polja DTO-a ovde
}