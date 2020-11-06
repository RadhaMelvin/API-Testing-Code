module.exports = {
    "Retrieve API (GET)": function (client) {
          var apiUrl = 'https://dog.ceo/api/breeds/list/all';
      client.apiGet(apiUrl, function (response) {
        console.log(response.body);
        var data = JSON.parse(response.body);
        console.log(data.status);
  
        client.assert.equal(response.statusCode, 200, "200 OK");
  
        client.end();
      });
  
    }
  
  };
  