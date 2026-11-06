// OpenStreetMap x Leaflet
var element = $("#osm-map")[0];
// var element = document.getElementById('osm-map');

var map = L.map(element);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.setView(target, 12);

// console.log("wow")

// L.marker(target).addTo(map);

//

// for(const [area, pts] of Object.entries(points)) {
//   let color;

//   switch(area) {
//     case 'tr':
//       color = "inverse";
//       break;
//     case 'dos':
//       color = "danger";
//       break;
//     case 'inq':
//       color = "info";
//       break;
//   }

//   for(const [loc, crd] of Object.entries(pts)) {
//     L.marker(crd, {
//       title: loc,
//       icon: L.divIcon({
//         html: `<button class="btn-solid theme-${color} btn-xs">${area === "tr" ? `<img src="assets/slex.webp" style="height: 25px;" />` : ""}${loc}</button>`,
//         // iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
//         // iconSize: [32, 32],
//         // iconAnchor: [16, 32],
//         // popupAnchor: [0, -32]
//       })
//     }).addTo(map);
//   }

//   if(area === 'tr')
//     L.polyline(Object.values(pts), {color: 'red'}).addTo(map);
// }

// // Strategic area
let sa_coords = [];

let feats = {};

const exp = [
  "593198348",
  "764366936",
  // "509383308",
  // "764366938",
  // "593198169",
  // "607809035",
  "609067915",
  "609067914",
  "1319564499",
  "1262217876",
  // "1318779279",
  // "1262217875",
  "1262217600",
  "1527540577",
  // "609067916",
  // "1098829927",
  // "1098829924",
  // "1098829926",
  "1166014652",
  "1390485950",
  // "1318779275",
  "1390485951",
  "586137962",
  "1335092750",
  "1335092747",
  "1335092748",
  "745632032",
  "745632027",
  "745632029",
  "745632040",
  "744804544",
  "744804545",
  "744804531",
  "744804543",
  "744804546",
  "744804512",
  "744804524",
  "744804518",
  "744804517",
  // "744804599",
  // "744804600",
  // "8203045xx",

  // "1537586373",
  // "1527545769",
  // "744804600",
  // "744804600",
  // "744804600",
];

for(l of exp) {
  let temp = opt.features.filter((f) => f.id.split("/")[1] === l)[0];


  L.marker([temp.geometry.coordinates[0][1], temp.geometry.coordinates[0][0]], {
    title: l,
    icon: L.divIcon({
      html: `<button class="btn-solid theme-info btn-xs">${l}</button>`,
      // iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
      // iconSize: [32, 32],
      // iconAnchor: [16, 32],
      // popupAnchor: [0, -32]
    })
  }).addTo(map);

  for(c of temp.geometry.coordinates) {
    sa_coords.push([c[1],c[0]]);
  }
}

// console.log(sa_coords);

// for(f of opt.features)  {
//   // for(p of Object.keys(f.properties)) {
//   //   if(!(Object.hasOwn(feats, p)))
//   //     feats[p] = [];

//   //   if(!(feats[p].includes(f.properties[p])))
//   //     feats[p].push(f.properties[p]);
//   // }

//   // if(("bridge" in f.properties)) {
//   // if(f.properties.name === "South Luzon Expressway") {
//   // if(f.properties.highway === "proposed") {
//   // if(["proposed","construction"].includes(f.properties.highway)) {
//   // if(f.properties.note === "yes") {
//   // if([
//   //   "I set this to construction due to the construction area",
//   //   // "Concrete pavement ongoing",
//   //   // "Concrete pavement completed. Asphalt pavement wil start soon.",
//   //   // "completed portion"
//   // ].includes(f.properties.note) | f.properties.highway === "motorway") {
//   // if(f.properties.layer) {

//   let cid = f.properties['@id'].split("/")[1];

//   for(c of f.geometry.coordinates)  {
//     // console.log(c);

//     sa_coords.push([c[1],c[0]]);
//   } 
// }

// console.log(feats);

// sa_coords.sort((a, b) => a[0] - b[0]);

console.log(sa_coords);

// sa_coords.map()

// const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// async function runLoop() {
  for(var x = 0; x <= sa_coords.length; x++)  {
    // console.log(x); 

    if(sa_coords.indexOf(sa_coords[x+1]) !== -1)
      L.polyline([sa_coords[x],sa_coords[x+1]], {color: 'red'}).addTo(map);

    // await delay(100);

    // if(sa_coords.indexOf(sa_coords[x+1]) !== -1)  {
    //   // setTimeout(() => {
    //     // console.log(sa_coords[0]);
    //     L.polyline([sa_coords[x],sa_coords[x+1]], {color: 'red'}).addTo(map);
    //   // }, 500);
    // }
  }

  // console.log(sa_coords)

  
// }

// runLoop();

// let x = 0;

// while(x <= sa_coords.length)  {
//   console.log(x);

//   x++;
// }

// for(var x = 0; x <= sa_coords.length; x++)  {
//   ((i) => {
//     setTimeout(() => {
//       console.log(i); 
//     }, 10000);
//   })(x);
//   // if(sa_coords.indexOf(sa_coords[x+1]) !== -1)  {
//   //   setTimeout(() => {
//   //     console.log(`${x}/${sa_coords.length}`);
//   //     L.polyline([sa_coords[x],sa_coords[x+1]], {color: 'red'}).addTo(map);
//   //   }, 5000);
//   // }
// }

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