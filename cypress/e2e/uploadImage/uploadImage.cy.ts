import uploadImagePage from "../../support/pageObjects/UploadImage";


describe('Image Upload Tests (TS POM)', () => {
  it('Should upload image without plugin', () => {
    uploadImagePage.visitAndUploadStandard();
  });

  it('Should upload image using plugin', () => {
    uploadImagePage.visitAndUploadPlugin();
  });

  it('Should upload image using drag and drop', () => {
    uploadImagePage.visitAndUploadDragDrop();
  });
  
});
