funtion abc() {
  var output = [];
var stackIndex = [];
var stackLevel = [];

var mainlist = $('img + input + input');
for(var j = 0; j<mainlist.length; j++)
{
  var curLevel = parseInt(mainlist[j].style.width);
  if(stackIndex.length == 0)
  {
    stackIndex.push(output);
    stackLevel.push(curLevel);
  }

  while(stackLevel[0] < curLevel)
  {
    stackLevel.pop();
    stackIndex.pop();
  }

  while(stackLevel[0] > curLevel)
  {
    stackIndex.push(stackIndex[0][stackIndex[0].length-1]);
    stackIndex.push(stackLevel - 20);
  }
    console.out(stackIndex, stackLevel);

  if(stackLevel[0] == curLevel)
  {
    stackIndex[stackIndex.length] = mainlist[j].value;
  }
  
  //i++;
}
} 