// UploadImagePage.ts
import 'cypress-file-upload';

class UploadImagePage {
  // Locators
  private fileInput = "input[type='file']";
  private uploadedPath = "#uploadedFilePath";
  private dragDropZone = "#drag-drop-upload";

  // URLs
  private demoPageUrl = "https://demoqa.com/upload-download";
  private dragDropUrl = "http://the-internet.herokuapp.com/upload";

  // Visit methods
  visitStandardPage(): void {
    cy.visit(this.demoPageUrl);
  }

  visitDragDropPage(): void {
    cy.visit(this.dragDropUrl);
  }

  // Upload methods
  uploadStandardFile(): void {
    cy.get(this.fileInput).selectFile('cypress/fixtures/demo.jpeg');
  }

  uploadFileUsingPlugin(): void {
    cy.get(this.fileInput).attachFile('test.jpeg');
  }

  uploadFileDragAndDrop(): void {
    cy.get(this.dragDropZone).attachFile('demo2.png', { subjectType: 'drag-n-drop' });
  }

  // Assertion methods
  assertStandardUpload(): void {
    cy.get(this.uploadedPath).should('contain.text', 'demo.jpeg');
  }

  assertPluginUpload(): void {
    cy.get(this.uploadedPath).should('contain.text', 'test.jpeg');
  }

  assertDragDropUpload(): void {
    cy.get(this.dragDropZone).should('contain.text', 'demo2.png');
  }

  // Combined actions
  visitAndUploadStandard(): void {
    this.visitStandardPage();
    this.uploadStandardFile();
    this.assertStandardUpload();
  }

  visitAndUploadPlugin(): void {
    this.visitStandardPage();
    this.uploadFileUsingPlugin();
    this.assertPluginUpload();
  }

  visitAndUploadDragDrop(): void {
    this.visitDragDropPage();
    this.uploadFileDragAndDrop();
    this.assertDragDropUpload();
  }
}

export default new UploadImagePage();
