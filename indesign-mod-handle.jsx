/*
    frame to grid
    version 0.1
    (c) 2011 alexander maly 
    git@alxandr.fastmail.fm
    110909-091901
    comment block v2
    */

var thisDoc=app.activeDocument;
var thisLayer=thisDoc.activeLayer;
var thisSelection=thisDoc.selection;
var gridXDim = thisDoc.gridPreferences.horizontalGridlineDivision;
var gridYDim = thisDoc.gridPreferences.verticalGridlineDivision;
//location units are in picas (1/6 inch)

if (thisSelection.length>0){
    for (var i=0;i<thisSelection.length;i++){
//        workingObject=thisSelection[i].duplicate(); // for testing
            workingObject=thisSelection[i];
            workingPaths=workingObject.paths;
            for(var j=0;j<workingPaths.length;j++){
                workingPoints=workingPaths[j].pathPoints;
            for(var k=0; k<workingPoints.length;k++){
                var locA=workingPoints[k].anchor;
                var xTrim=locA[0]%gridXDim;
                var yTrim=locA[1]%gridYDim;
                if(xTrim<gridXDim*.5){locA[0]-=xTrim;}
                else {locA[0]+=(gridXDim-xTrim);}
                if(yTrim<gridYDim*.5){locA[1]-=yTrim;}
                else {locA[1]+=(gridYDim-yTrim);}               
                workingPoints[k].anchor=locA;
                }
            }
        }  

}
else {
    alert("nothing selected");
    }
