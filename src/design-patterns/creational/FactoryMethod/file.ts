// @TODO: improve this example

interface FileBase {
  export(): void;
  render(): void;
}

class PDF implements FileBase {
  export(): void {
    console.log("export pdf file...");
  }

  render(): void {
    console.log("render pdf file...");
  }
}

class CSV implements FileBase {
  export(): void {
    console.log("export csv file...");
  }

  render(): void {
    console.log("render csv file...");
  }
}

class DOCX implements FileBase {
  export(): void {
    console.log("export docx file...");
  }

  render(): void {
    console.log("render docx file...");
  }
}

class FileFactory {
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
pdf.render(); // Output: render pdf file...
pdf.export(); // Output: export pdf file...

const csv = FileFactory.createFile("csv");
csv.render(); // Output: render csv file...
csv.export(); // Output: export csv file...

const docx = FileFactory.createFile("docx");
docx.render(); // Output: render docx file...
docx.export(); // Output: export docx file...
