import { Reader } from '../models/Reader';
import { Copy } from '../models/Copy';

export class BorrowService {
  public borrow(reader: Reader, copy: Copy): boolean {
    if (copy.isCopyAvailable()) {
      copy.borrow();
      reader.borrowCopy(copy);
      return true;
    }
    return false;
  }

  public returnBook(reader: Reader, copy: Copy): void {
    copy.returnCopy();
    reader.returnCopy(copy);
  }
}