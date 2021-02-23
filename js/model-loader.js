let jsonData = 0;
fetch('./json/location-model-map.json')
    .then(res => res.json())
    .then((data) => {
        jsonData = data;
        loadModel(data);
}).catch(err => console.error(err));

const loadModel = (data) => {
    let currentLocation = window.location.href;
    var locationKey = currentLocation.substr(currentLocation.indexOf("#") + 1);
    for (let i = 0; i < data.keys.length; i++) {
        if (data.keys[i] != locationKey) {
            continue;
        }

        console.log(`Loading model with ID: ${data.keys[i]};\nJSON Response: Android: ${data.locations[i].android}; iOS: ${data.locations[i].iOS}`);
        const viewer = document.getElementById("m-viewer");
        viewer.setAttribute("src", data.locations[i].android);
        viewer.setAttribute("ios-src", data.locations[i].iOS);
    }
}