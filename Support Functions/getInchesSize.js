function getInchesSize(size) 
// converts a page boxes size in points (width and height) to the equivalent size in inches
// returns an array (inchesSize) [0] is width [1] is height.

{
    var inch = 72;
    var width = 0;
    var height = 1;
    var left = 0;
    var top = 1;
    var right = 2;
    var bottom = 3;
    var inchesSize = [0, 0];
    inchesSize[width] = (size[right] - size[left]) / inch;
    inchesSize[height] = (size[top] - size[bottom]) / inch;
    return inchesSize;
}