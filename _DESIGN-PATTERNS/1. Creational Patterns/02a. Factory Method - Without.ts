// Document.ts
namespace FactoryMethodWithout {
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

  // DocumentManager.ts
  class DocumentManager {
    createDocument(type: string): Document {
      let doc: Document;
      if (type === "Word") {
        doc = new WordDocument();
      } else if (type === "PDF") {
        doc = new PDFDocument();
      } else {
        throw new Error("Unknown document type");
      }
      return doc;
    }
  }

  // Main.ts
  function main() {
    const manager = new DocumentManager();

    // Create a Word document instance
    let wordDoc = manager.createDocument("Word");
    wordDoc.open();

    // Create a PDF document instance
    let pdfDoc = manager.createDocument("PDF");
    pdfDoc.open();
  }

  main();
}
