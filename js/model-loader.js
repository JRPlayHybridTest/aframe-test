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
    for (let i = 0; i < data.entries.length; i++) {
        if (data.entries[i].key != locationKey) {
            continue;
        }

        console.log(`Loading model with ID: ${data.entries[i].key};\nJSON Response: Android: ${data.entries[i].android}; iOS: ${data.entries[i].iOS}`);
        const viewer = document.getElementById("m-viewer");
        viewer.setAttribute("src", data.entries[i].android);
        viewer.setAttribute("ios-src", data.entries[i].iOS);
    }
}