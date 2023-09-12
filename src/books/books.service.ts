import { Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';
import * as path from 'path';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  create(createBookDto: CreateBookDto) {
    const directoryPath = './data';
    const fileName = 'book.json';
    const filePath = path.join(directoryPath, fileName);

    async function writeDataToFile(filePath: string, data: CreateBookDto) {
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
    writeDataToFile(filePath, createBookDto);

    return createBookDto;
  }

  findAll() {
    return `This action returns all books`;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
