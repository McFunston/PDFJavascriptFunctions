function cropToTrim()
// Set the crop box size to the trim box size (remove visible bleed)

{
    var cropSize = this.getPageBox("Crop",this.pageNum);
    var trimSize = this.getPageBox("Trim",this.pageNum);
    this.setPageBoxes("Crop",0,this.numPages-1,trimSize);
}
