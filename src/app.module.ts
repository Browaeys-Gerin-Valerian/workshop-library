import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';
import { LibrariesModule } from './libraries/libraries.module';

@Module({
  imports: [BooksModule, AuthorsModule, LibrariesModule],
})
export class AppModule {}
