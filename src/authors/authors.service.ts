import { Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';
import * as path from 'path';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Injectable()
export class AuthorsService {
  create(createAuthorDto: CreateAuthorDto) {
    const directoryPath = './data';
    const fileName = 'authors.json';
    const filePath = path.join(directoryPath, fileName);

    async function writeDataToFile(filePath: string, data: CreateAuthorDto) {
      try {
        const updatedData = { id: new Date().getTime(), ...data };
        await fs.mkdir(directoryPath, { recursive: true });
        const jsonData = JSON.stringify(updatedData, null, 2);
        await fs.appendFile(filePath, jsonData);
        console.log(
          'Les données ont été écrites avec succès dans le fichier JSON.',
        );
      } catch (error) {
        console.error("Une erreur s'est produite :", error);
      }
    }
    writeDataToFile(filePath, createAuthorDto);

    return createAuthorDto;
  }

  findAll() {
    return `This action returns all authors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} author`;
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }
}
