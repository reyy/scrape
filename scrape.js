function abc() {
  var output = new Array();
var stackIndex = new Array();
var stackLevel = new Array();

var mainlist = $('img + input + input');
for(var j = 0; j<mainlist.length; j++)
{
  var curLevel = parseInt(mainlist[j].style.width);
  if(stackIndex.length == 0)
  {
    stackIndex = output;
    stackLevel.push(curLevel);
  }

  while(stackLevel[0] < curLevel)
  {
    stackLevel.pop();
    stackIndex.pop();
    curLevel -=20;
  }

  while(stackLevel[0] > curLevel)
  {
    stackIndex.push(stackIndex[0][stackIndex[0].length-1]);
    stackLevel.push(stackLevel[0] + 20);
    curLevel +=20;
  }
    console.log(stackIndex, stackLevel);

  if(stackLevel[0] == curLevel)
  {
    stackIndex[stackIndex.length] = mainlist[j].value;
  }
  
  //i++;
}
} 
