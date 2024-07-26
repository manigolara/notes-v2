// Document.ts
namespace FactoryMethodWith {
  abstract class Document {
    abstract open(): void;
  }

  // WordDocument.ts
  class WordDocument extends Document {
    open(): void {
      console.log("Opening Word Document");
    }
  }

  // PDFDocument.ts
  class PDFDocument extends Document {
    open(): void {
      console.log("Opening PDF Document");
    }
  }

  // DocumentFactory.ts
  abstract class DocumentFactory {
    abstract createDocument(): Document;
  }

  // WordDocumentFactory.ts
  class WordDocumentFactory extends DocumentFactory {
    createDocument(): Document {
      return new WordDocument();
    }
  }

  // PDFDocumentFactory.ts
  class PDFDocumentFactory extends DocumentFactory {
    createDocument(): Document {
      return new PDFDocument();
    }
  }

  // Main.ts
  function main() {
    // Create a factory for Word documents
    let wordFactory: DocumentFactory = new WordDocumentFactory();

    // Use the factory to create a Word document instance
    let wordDoc: Document = wordFactory.createDocument();
    wordDoc.open();

    // Create a factory for PDF documents
    let pdfFactory: DocumentFactory = new PDFDocumentFactory();

    // Use the factory to create a PDF document instance
    let pdfDoc: Document = pdfFactory.createDocument();
    pdfDoc.open();
  }

  main();
}
