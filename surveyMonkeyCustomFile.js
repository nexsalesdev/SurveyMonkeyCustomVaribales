function getQueryParams(qs) {
      qs = qs.split('+').join(' ');

      var params = {},
          tokens,
          re = /[?&]?([^=]+)=([^&]*)/g;

      while (tokens = re.exec(qs)) {
          params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
      }
      return params;
  }

  
  function myTime(){
    var iFram = document.querySelectorAll('iframe[src*="surveymonkey"]');
    if(iFram.length > 0){
      var urlT = iFram[0].getAttribute('src');
      if(urlT.indexOf('?') == -1){
        var query = getQueryParams(window.location.search);
        iFram[0].setAttribute('src',urlT+'?fname='+query.fname+'&lname='+query.lname);
        clearInterval(myVarTimer)
      }
    }
  }

  var myVarTimer = setInterval(myTime, 1000);