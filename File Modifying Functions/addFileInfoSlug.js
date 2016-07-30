function addFileInfoSlug(nameLength, numberPages) 
// adds 1/2 inch to the bottom of the media box and adds the filename and (optionally) the page numberPages
// filename will be truncated by setting the nameLength
{
var bottom;
var rMedia = this.getPageBox("Media",this.pageNum); 
bottom = rMedia[3]
rMedia[3] -= 0.5 * inch;
this.setPageBoxes("Media",0,this.numPages-1,rMedia);

var inch = 72;
var jobNumber = this.documentFileName;
jobNumber = jobNumber.substr(0,nameLength);

for (var p = 0; p < this.numPages; p++) { 
 // put a rectangle at .5 inch, .5 inch 
  var aRect = this.getPageBox( {nPage: p} ); 
  aRect[0] += .5*inch;// from left corner of page 
  aRect[2] = aRect[0]+3*inch; // Make it 3 inches wide 
  aRect[1] = bottom+.5*inch; //.5 inches high
  aRect[3] = bottom// set at bottom
  var f = this.addField("p."+p, "text", p, aRect ); 
  f.textSize = 14;  // 14-pt type
  f.textColor = color.blue; // use whatever color you want
  f.strokeColor = color.white; 
  f.textFont = font.Helv;
  if (numberPages) 
  {
    f.value = String("Page "+(p+1)+"   "+jobNumber);  // page numbering is zero-based
  } 
  else 
  {
    f.value = String(jobNumber);
  }

  f.readonly = true; 
} 
this.flattenPages()
}