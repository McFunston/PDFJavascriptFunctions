function insertBlank(afterPage, basePage)
// Insert a blank page after afterPage using the same page geometry from basePage
// For some reason I have to save the file and then load it again for the correct geometry to show up in Acrobat's "Crop Pages" tool
{
    var trimSize = this.getPageBox("Trim", basePage);
    var cropSize = this.getPageBox("Crop", basePage);
    var bleedSize = this.getPageBox("Bleed", basePage);
    var heightIndex = 1;
    var widthIndex = 2;
    var newPage = afterPage+1;

    this.newPage(newPage, cropSize[widthIndex], cropSize[heightIndex]);    
    this.setPageBoxes("Trim", newPage, newPage, trimSize);
    this.setPageBoxes("Bleed", newPage, newPage, bleedSize);
}