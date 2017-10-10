const express = require('express');
const app = express();
const htmlToJson = require('html-to-json');

app.get('/winning-numbers', function(req,res,next){
  htmlToJson.request('http://invoice.etax.nat.gov.tw/', {
    'spans': ['span.t18Red', function($span){
      return $span;
    }],
    'headings': ['h2',$h2=>$h2]
  },function(err, result){
    let winningScores = {
      grandPrize: result.spans[0].text(),
      secondGrandPrize: result.spans[1].text(),
      firstPrize: result.spans[2].text().split('、'),
      getThree: result.spans[3].text().split('、'),
      date: {
        year: result.headings[1].text().split('').slice(0,3).join(''),
        period: result.headings[1].text().split('').slice(4,result.headings[1].text().length-1).join(''),
        complete: result.headings[1].text()
      }
    };
    res.send(winningScores);
  });
});

app.listen(8000, ()=>{
  console.log('listening on 8000');
});
