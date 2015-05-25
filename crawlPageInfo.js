function crawlInfo(id)
{
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
      return data[0][0];
    }
  );
}