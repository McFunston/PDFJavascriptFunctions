function findCenter(box)
//returns the x and y centers given any page box (x0, y1, x1, y0)
//as widthAndHeight[width, height]
{
    var left = 0;
    var top = 1;
    var right = 2;
    var bottom = 3;
    var widthAndHeight = [0, 0];
    var height = box[top] - box[bottom];
    var width = box[right] - box[left];

    widthAndHeight[0] = width/2;
    widthAndHeight[1] = height/2;

    return widthAndHeight;
}