function checkPageBoxSizes(boxType)
// Checks whether box (Trim, Crop, Media, Art) are consistent. Takes boxType as parameter.
// Requires getInchesSize function.
// Returns true if they are consistent, otherwise it returns false.

{
    var firstPageSize;
    var trimBoxesConsistent = true;
    var inch = 72;
    var width = 0;
    var height = 1;
    var left = 0;
    var top = 1;
    var right = 2;
    var bottom = 3;
    var inchesSize = [0, 0];

    firstPageSize = this.getPageBox(boxType, 0)
    console.println("First " + boxType + " box is "+firstPageSize);
    inchesSize = getInchesSize(firstPageSize);
    console.println("Size in inches is " + inchesSize[width].toFixed(2) + " X "+ inchesSize[height].toFixed(2));

    for (var p = 0; p < this.numPages; p++)
    {
        var currentPageSize;
        currentPageSize=this.getPageBox(boxType, p);
        console.println("Current page size is "+currentPageSize);

        if (currentPageSize.toString() != firstPageSize.toString())
        {
            trimBoxesConsistent = false;
        }
        
    }
    return trimBoxesConsistent;
}