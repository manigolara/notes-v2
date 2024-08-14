namespace FactoryMethod {
  /**
   * Products
   * ---------------------------- */
  // Prduct Interface
  interface Reader {
    read(): void;
  }
  interface Exporter {
    export(): void;
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
  class WordExporter implements Exporter {
    export(): void {
      console.log("Exporting Word document...");
    }
  }
  class PDFExporter implements Exporter {
    export(): void {
      console.log("Exporting PDF document...");
    }
  }
  /**
   * Creator
   * ---------------------------- */
  // Abstract Creator
  abstract class DocumentFactory {
    public abstract createReader(): Reader;
    public abstract createExporter(): Exporter;
  }
  // Concrete Creator
  class WordReaderFactory extends DocumentFactory {
    public createReader(): Reader {
      return new WordReader();
    }
    public createExporter(): Exporter {
      return new WordExporter();
    }
  }
  // Concrete Creator
  class PDFReaderFactory extends DocumentFactory {
    public createReader(): Reader {
      return new PDFReader();
    }
    public createExporter(): Exporter {
      return new PDFExporter();
    }
  }
  /**
   * Client
   * ---------------------------- */
  const wordFactory: DocumentFactory = new WordReaderFactory();
  const wordReader: Reader = wordFactory.createReader();
  const wordExporter: Exporter = wordFactory.createExporter();
  wordReader.read(); // -> Reading Word document...
  wordExporter.export(); // -> Exporting Word document...

  const pdfFactory: DocumentFactory = new PDFReaderFactory();
  const pdfReader: Reader = pdfFactory.createReader();
  const pdfExporter: Exporter = pdfFactory.createExporter();
  pdfReader.read(); // -> Reading PDF document...
  pdfExporter.export(); // -> Exporting PDF document...
}
