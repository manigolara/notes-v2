namespace FactoryMethod {
  /**
   * Products
   * ---------------------------- */
  // Prduct Interface
  interface Reader {
    read(): void;
  }
  // Concrete Product
  class WordReader implements Reader {
    public read(): void {
      console.log("Reading Word document...");
    }
  }
  class PDFReader implements Reader {
    public read(): void {
      console.log("Reading PDF document...");
    }
  }
  /**
   * Creator
   * ---------------------------- */
  // Abstract Creator
  abstract class ReaderFactory {
    public abstract createReader(): Reader;
  }
  // Concrete Creator
  class WordReaderFactory extends ReaderFactory {
    public createReader(): Reader {
      return new WordReader();
    }
  }
  // Concrete Creator
  class PDFReaderFactory extends ReaderFactory {
    public createReader(): Reader {
      return new PDFReader();
    }
  }
  /**
   * Client
   * ---------------------------- */
  const wordFactory: ReaderFactory = new WordReaderFactory();
  const wordReader: Reader = wordFactory.createReader();
  wordReader.read(); // -> Reading Word document...

  const pdfFactory: ReaderFactory = new PDFReaderFactory();
  const pdfReader: Reader = pdfFactory.createReader();
  pdfReader.read(); // -> Reading PDF document...
}
