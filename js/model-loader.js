let currentLocation = window.location.href;
let jsonData = 0;
await fetch('./json/location-model-map.json')
    .then(res => res.json())
    .then((data) => {
        jsonData = data;
}).catch(err => console.error(err));

var locationKey = currentLocation.substr(currentLocation.indexOf("#"));
console.log(locationKey);