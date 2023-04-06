import { Injectable } from '@nestjs/common';
import { database } from '../../database/database';
import { ICharacter } from '../models/interfaces';

@Injectable()
export class CharactersService {
  getCharacters(): ICharacter[] {
    return database;
  }
}
