var callCount = 0;
var doneCount = 0;

function crawlInfo(id, jsonObj)
{
  var answer = null;
  artoo.ajaxSpider(
    ['https://confluence.paypal.com/pages/viewinfo.action?pageId='+id],
    {
      scrape: {iterator:'#content > table > tbody > tr > td:nth-child(1) > div:nth-child(1) > div > table > tbody', data: {
        Author: {method: 'text', sel: 'tr:nth-child(2) > td:nth-child(2) > a'}, 
        AuthorUsername: {attr: 'data-username', sel: 'tr:nth-child(2) > td:nth-child(2) > a'},
        LastModified: {method:'text', sel:'tr:nth-child(3) > td:nth-child(3)'}
      }},
      throttle: 3000,
      limit: 1
    },
    function(data) {
      console.log('Retrieved data:', data[0][0]);
      for (var attrname in pageInfo) { jsonObj[attrname] = pageInfo[attrname]; }
      doneCount++;
    }
  );
  

function iterateTree()
{
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
    //console.log(stackIndex, stackLevel);

    if(stackLevel[stackLevel.length-1] == curLevel)
    {
      var pageId = mainlist[j].name.split("title-")[1];
      var topOfStack = stackIndex[stackIndex.length-1];
      if(topOfStack == null)
        topOfStack = new Array();
      topOfStack.push({});
      topOfStack[topOfStack.length-1].title = mainlist[j].value;
      topOfStack[topOfStack.length-1].id = pageId;
      topOfStack[topOfStack.length-1].childPages = new Array();

      callCount++;
      var pageInfo = crawlInfo(pageId, topOfStack[topOfStack.length-1]);
    }
    
    //i++;
  } 
  return output[0];
}

var ans = iterateTree();
var checker = setInterval(function () {if(doneCount>=callCount) {artoo.savePrettyJson(ans); clearInterval(checker);} else console.log(doneCount+"/"+callCount)}, 3000);
