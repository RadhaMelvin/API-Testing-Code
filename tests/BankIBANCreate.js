module.exports = {
    "Retrieve API (POST)": function (client) {
          var apiUrl = 'https://bankhaus-vonderheydttest.appiancloud.com/suite/webapi/individual';
   var postData = {
    "generalInformation":
    {
        "customerType": "1",
        "purposeOfBusiness": "1",
        "extCustomerId": "123456"     
    },

"personalData":
    {
        "title": "1",
        "firstName": "Max",
        "lastName": "Mustermann",
        "gender":"MALE",
        "occupation": "35",
        "degree":"Bachelor's Degree"            
    },

"contactData":
    {
        "mobile": "0049 123 456789 0",
        "phone": "089 875698",
        "fax": "123456",
        "email":"max.mustermann@test.de",
        "countryResidence": "DEU",
        "street":"Musterstraße",
        "mailbox":"Postfach 8 15",
        "houseNo":"1",
        "zip":"80538",
        "city":"München"      
    },

"identificationData":
    {   
        "birthDay":"01.01.1960",
        "countryBirth":"DEU",
        "countryPrimCitizen":"DEU",
        "countrySecCitizen":"",
        "isUsCitizen":"0",
        "birthPlace":"München",
        "birthName":"Mustermann",
        "idCitizenship":"DEU",
        "idDocType":"",
        "idNo":"123456",
        "idAuthority":"",
        "idCountry":"DEU",
        "idCountryOfDocument":"DEU",
        "idIssued":"27.05.2018",
        "idValidUntil":"27.05.2023"
        },

"financialData":
    {
        "taxNo": "123456",
        "countryTaxation":"DEU",
        "refBankIban":"DEXXXXXXXXXXXXXX",
        "refBankBic":"BYYYYY1234",
        "refBankAccOwner":"Max Mustermann",
        "sourceOfWealth":"1"      
    }
}
      client.apiPost(apiUrl, postData, function (response) {
        console.log(response.body);
        var data = JSON.parse(response.body);
        console.log(data.status);
  
        client.assert.equal(data.firstName, "Max", "Firstname OK");
        client.assert.equal(data.lastName, "Mustermann", "Lastname OK");
        client.assert.equal(data.iban, "DEXXXXXXXXXXXXXX", "iban OK");
        client.assert.equal(data.customerId, "XXXXXXXX-YYYY-XXXX-YYYY-XXXXXXXXXXXX", "customerId OK");
        client.assert.equal(data.extCustomerId, "123456", "extCustomerId OK");
  
        client.end();
      });
  
    }
  
  };