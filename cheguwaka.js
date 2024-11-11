$.ajax({
  type: 'GET',
  url: 'https://wakatime.com/share/@chegudev/ef6d0f76-c5d4-4f5a-b935-452a1478f507.json',
  dataType: 'jsonp',
  success: function(response) {
    console.log(response.data);
  },
});