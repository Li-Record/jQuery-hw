var country = [{
        name: 'aaa',
    },
    {
        name: 'bbb',
    }
]
var countryStr = JSON.stringify(country);
localStorage.setItem('country', countryStr);
var countryGet = localStorage.getItem('country');
var countryJson = JSON.parse(countryGet);
console.log(countryJson[1].name);