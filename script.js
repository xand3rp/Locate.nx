// OpenStreetMap x Leaflet
var element = $("#osm-map")[0];
// var element = document.getElementById('osm-map');

var map = L.map(element);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.setView(target, 12);

// L.marker(target).addTo(map);

//

for(const [area, pts] of Object.entries(points)) {
  let color;

  switch(area) {
    case 'tr':
      color = "inverse";
      break;
    case 'dos':
      color = "danger";
      break;
    case 'inq':
      color = "info";
      break;
  }

  for(const [loc, crd] of Object.entries(pts)) {
    L.marker(crd, {
      title: loc,
      icon: L.divIcon({
        html: `<button class="btn-solid theme-${color} btn-xs">${area === "tr" ? `<img src="assets/slex.webp" style="height: 25px;" />` : ""}${loc}</button>`,
        // iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
        // iconSize: [32, 32],
        // iconAnchor: [16, 32],
        // popupAnchor: [0, -32]
      })
    }).addTo(map);
  }

  if(area === 'tr')
    L.polyline(Object.values(pts), {color: 'red'}).addTo(map);
}

// // Strategic area
// let sa_coords = [];

// for(f of opt.features)  {
//   for(c of f.geometry.coordinates)
//     sa_coords.push([c[1],c[0]]);
// }

// console.log(sa_coords);

// L.polyline(sa_coords, {color: 'red'}).addTo(map);


// for(f of opt.features)  {
//   for(c of f.geometry.coordinates)  {
//     let temp = [[c[1]],c[0]]
//     L.polyline(temp, {color: 'red'}).addTo(map);
//   }
// }


//
map.on('click', function(e){      
  var dialog = $("#dlg_add_loc")[0];

  $("#dlg_coordinates").text(`${e.latlng.lat}, ${e.latlng.lng}`);

  dialog.showModal();
});