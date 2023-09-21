import { Repository, EntityRepository } from 'typeorm';
import { User } from '../entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  // Ovde možete dodati vlastite metode za rad s bazom podataka ako su potrebne.
}
