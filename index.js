$.ajax({
  url: 'http://api.suns.com:7001/',
  success: function(data) {
    console.log('data', data);
  },
  fail: function(err) {
    console.log('err', err);
  },
})