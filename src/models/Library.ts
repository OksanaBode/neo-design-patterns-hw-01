import { Author } from "./Author";
import { AbstractBook } from "./AbstractBook";
import { Copy } from "./Copy";
import { Reader } from "./Reader";
import { Book } from "./Book";
import { EBook } from "./EBook";

export class Library {
  private authors: Author[] = [];
  private books: AbstractBook[] = [];
  private copies: Copy[] = [];
  private readers: Reader[] = [];

  public addAuthor(author: Author): void {
    this.authors.push(author);
  }

  public addBook(book: AbstractBook): void {
    this.books.push(book);
  }

  public addCopy(copy: Copy): void {
    this.copies.push(copy);
  }

  public addReader(reader: Reader): void {
    this.readers.push(reader);
  }

  public getAvailableCopies(): Copy[] {
    return this.copies.filter(copy => copy.isCopyAvailable());
  }

  public findBooksByAuthor(author: Author): AbstractBook[] {
    return this.books.filter(book => book.getAuthor() === author);
  }
}
