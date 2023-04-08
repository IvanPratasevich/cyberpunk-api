import { Controller, Get, Param } from '@nestjs/common';
import { CharactersService } from './characters.service';

@Controller('characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Get()
  getCharacters() {
    return this.charactersService.getCharacters();
  }

  @Get('name/:name')
  getCharacter(@Param('name') name: string) {
    return this.charactersService.getCharacter(name);
  }

  @Get('id/:id')
  getCharacterById(@Param('id') id: string) {
    return this.charactersService.getCharacterById(id);
  }

  @Get('page/:page')
  getCharactersByPage(@Param('page') page: string) {
    return this.charactersService.getCharactersByPage(page);
  }
}
