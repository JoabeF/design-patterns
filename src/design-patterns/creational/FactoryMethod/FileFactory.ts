import {
  csvToPNG,
  csvToText,
  docxToPNG,
  docxToText,
  File,
  pdfToPNG,
  pdfToText,
} from "./utils/converters";

interface FileBase {
  convertToPNG(): void;
  extractText(): void;
}

export class PDF implements FileBase {
  convertToPNG(): File {
    return pdfToPNG(this);
  }

  extractText(): string {
    return pdfToText(this);
  }
}

export class CSV implements FileBase {
  convertToPNG(): File {
    return csvToPNG(this);
  }

  extractText(): string {
    return csvToText(this);
  }
}

export class DOCX implements FileBase {
  convertToPNG(): File {
    return docxToPNG(this);
  }

  extractText(): string {
    return docxToText(this);
  }
}

export class FileFactory {
  static createFile(type: "pdf" | "csv" | "docx"): FileBase {
    switch (type) {
      case "pdf":
        return new PDF();
      case "csv":
        return new CSV();
      case "docx":
        return new DOCX();
      default:
        throw new Error("Unknown vehicle type");
    }
  }
}

const pdf = FileFactory.createFile("pdf");
console.log(pdf.extractText()); // pdf text extracted
console.log(pdf.convertToPNG()); // pdf-image.png

const csv = FileFactory.createFile("csv");
console.log(csv.extractText()); // csv text extracted
console.log(csv.convertToPNG()); // csv-image.pdfToPNG

const docx = FileFactory.createFile("docx");
console.log(docx.extractText()); // docx text extracted
console.log(docx.convertToPNG()); // docx-image.png
