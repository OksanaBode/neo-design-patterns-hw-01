import { Author } from './Author';

export abstract class AbstractBook {
  protected title: string;
  protected year: number;
  protected author: Author;

  constructor(title: string, year: number, author: Author) {
    this.title = title;
    this.year = year;
    this.author = author;
  }

  abstract getDescription(): string;

  public getTitle(): string {
    return this.title;
  }

  public getAuthor(): Author {
    return this.author;
  }
}