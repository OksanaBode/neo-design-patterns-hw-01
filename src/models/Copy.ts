import { AbstractBook } from './AbstractBook';

export class Copy {
  private book: AbstractBook;
  private isAvailable: boolean = true;

  constructor(book: AbstractBook) {
    this.book = book;
  }

  public getBook(): AbstractBook {
    return this.book;
  }

  public isCopyAvailable(): boolean {
    return this.isAvailable;
  }

  public borrow(): boolean {
    if (!this.isAvailable) return false;
    this.isAvailable = false;
    return true;
  }

  public returnCopy(): void {
    this.isAvailable = true;
  }
}