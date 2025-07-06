import { AbstractBook } from './AbstractBook';
import { Author } from './Author';

export class Book extends AbstractBook {
  constructor(title: string, year: number, author: Author) {
    super(title, year, author);
    author.addBook(this);
  }

  public getDescription(): string {
    return `"${this.title}" (paper), written by ${this.author.getName()} in ${this.year}`;
  }
}