var canvas = new fabric.Canvas('myCanvas');
playerx=10;
playery=10;
blockimagewidth=30;
blockimageheight=30;
var playerobject="";
var blockimageobject="";
function playerupate(){
    fabric.Image.fromURL("player.png",function(Img){
        playerobject=Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(150);
        playerobject.set({
            top:playery,
            left:playerx
        });
        canvas.add(playerobject);
    });
}
function blockupate(getimage){
    fabric.Image.fromURL(getimage,function(Img){
        blockimageobject=Img;
        blockimageobject.scaleToWidth(blockimagewidth);
        blockimageobject.scaleToHeight(blockimageheight);
        blockimageobject.set({
            top:playery,
            left:playerx
        });
        canvas.add(blockimageobject);
    });
}