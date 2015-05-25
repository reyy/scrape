
var output = new Array();
var stackIndex = new Array();
var stackLevel = new Array();

var mainlist = $('img + input + input');
for(var j = 0; j<mainlist.length; j++)
{
  var curLevel = parseInt(mainlist[j].style.width);
  if(stackIndex.length == 0)
  {
    output = new Array();
    //stackIndex = output;
    stackIndex.push(output);
    stackLevel.push(curLevel);
  }

  while(stackLevel[stackIndex.length-1] < curLevel)
  {
    stackLevel.pop();
    stackIndex.pop();
  }

  while(stackLevel[stackIndex.length-1] > curLevel)
  {
    var topOfStack = stackIndex[stackIndex.length-1];
    stackIndex.push(topOfStack[topOfStack.length-1].childPages);
    stackLevel.push(stackLevel[stackLevel.length-1] - 20);
  }
    console.log(stackIndex, stackLevel);

  if(stackLevel[stackLevel.length-1] == curLevel)
  {
    var topOfStack = stackIndex[stackIndex.length-1];
    if(topOfStack == null)
      topOfStack = new Array();
    topOfStack.push({});
    topOfStack[topOfStack.length-1].title = mainlist[j].value;
    topOfStack[topOfStack.length-1].childPages = new Array();
  }
  
  //i++;
}
