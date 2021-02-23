let jsonData = 0;
fetch('./json/location-model-map.json')
    .then(res => res.json())
    .then((data) => {
        jsonData = data;
        loadModel(data);
}).catch(err => console.error(err));

const loadModel = (data) => {
    let currentLocation = window.location.href;
    var locationKey = currentLocation.substr(currentLocation.indexOf("#"));
    console.log(locationKey);
}