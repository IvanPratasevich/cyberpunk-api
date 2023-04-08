import { Injectable, NotFoundException } from '@nestjs/common';
import { database } from '../../database/database';
import { ICharacter } from '../models/interfaces';
import { chunkArr } from '../utils/utils';

@Injectable()
export class CharactersService {
  getCharacters = (): ICharacter[] => database;

  getCharacter = (name: string): ICharacter[] =>
    database.filter((character: ICharacter) =>
      character.name.toLowerCase().includes(name.toLowerCase()),
    );

  getCharacterById = (id: string): ICharacter[] => {
    const findUser: ICharacter = database.find(
      (character: ICharacter) => character.id === +id,
    );

    if (!findUser) {
      throw new NotFoundException('Character not found!');
    }

    return [findUser];
  };

  getCharactersByPage = (page: string): ICharacter[] =>
    chunkArr(database)[page];
}
