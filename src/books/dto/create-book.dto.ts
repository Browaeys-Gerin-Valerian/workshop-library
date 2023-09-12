interface Author {
  id: string;
  name: string;
}

export class CreateBookDto {
  id: string;
  name: string;
  year: number;
  authors: Author[];
}
