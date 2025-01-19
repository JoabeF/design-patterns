import { CSV, DOCX, PDF } from "../FileFactory";

export function pdfToText(_file: PDF) {
  return "pdf text extracted";
}

export function csvToText(_file: CSV) {
  return "csv text extracted";
}

export function docxToText(_file: DOCX) {
  return "docx text extracted";
}

export function pdfToPNG(_file: PDF) {
  return new File([], "pdf-image.png");
}

export function csvToPNG(_file: CSV) {
  return new File([], "csv-image.png");
}
export function docxToPNG(_file: DOCX) {
  return new File([], "docx-image.png");
}
